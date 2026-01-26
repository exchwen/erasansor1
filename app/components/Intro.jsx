"use client";
import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import Image from 'next/image';

export default function Intro({ onFinish }) {
  const canvasRef = useRef();
  const [isMounted, setIsMounted] = useState(false);
  
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const startFadeAndFinish = useCallback(() => {
    if (isFading) return; 
    setIsFading(true);
    
    setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 800); 
  }, [isFading, onFinish]);

  useEffect(() => {
    if (!isMounted || !isVisible) return;

    // --- Sahne Kurulumu ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); 

    const width = window.innerWidth;
    const height = window.innerHeight;
    const initialFov = width < 768 ? 85 : 75;
    let camera = new THREE.PerspectiveCamera(initialFov, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- DEĞİŞKENLER (Mirror Referansları) ---
    // Bu değişkenler hem Loader içinde hem de Animate döngüsünde kullanılacak
    let mirrorMesh = null;
    let cubeCamera = null;
    let cubeRenderTarget = null;
    let mixer = null;

    // --- ENVIRONMENT (HDR) YÜKLEME ---
    const hdrLoader = new HDRLoader();
    hdrLoader.load(
        '/studio.hdr', 
        (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture; 
            console.log("HDR Environment Yüklendi");
        },
        undefined, 
        (err) => console.error("HDR hatası:", err)
    );

    // --- GLB Model Yükleme ---
    const loader = new GLTFLoader();
    const modelPath = '/erasansor-createdby-dogukankaya.glb';

    loader.load(
      modelPath,
      (gltf) => {
        console.log("Model Başarıyla Yüklendi!");
        setProgress(100);

        // 1. Dinamik Yansıma için CubeCamera Hazırlığı
        cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, { // 256 performans için ideal, çok kasarsa 128 yap
            format: THREE.RGBAFormat,
            generateMipmaps: true,
            minFilter: THREE.LinearMipmapLinearFilter,
            colorSpace: THREE.SRGBColorSpace 
        });

        // Kamerayı oluştur ama henüz sahneye ekleme, pozisyonu aşağıda belirlenecek
        cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
        scene.add(cubeCamera);

        // 2. Modeli Tara ve Materyalleri Ayarla
        gltf.scene.traverse((child) => {
          
          // A) AYNA (Mirror) MESH BULUNDUĞUNDA
          if (child.isMesh && child.name === "Mirror") {
            mirrorMesh = child;

            // KRİTİK: Sanal kamerayı aynanın tam ortasına taşıyoruz.
            // getWorldPosition kullanıyoruz ki grup içindeyse bile doğru konumu alsın.
            child.getWorldPosition(cubeCamera.position);

            // Ayna Materyali
            mirrorMesh.material = new THREE.MeshPhysicalMaterial({
              color: 0xffffff,
              metalness: 1, 
              roughness: 0, 
              envMap: cubeRenderTarget.texture, // Canlı kamera görüntüsü
              envMapIntensity: 1,
              side: THREE.DoubleSide
            });
          }

          // B) Diğer tüm parçalar (Normal HDR yansıması)
          if (child.isMesh && child.material && child.name !== "Mirror") {
            child.material.envMapIntensity = 1.0;
            child.material.needsUpdate = true;
          }
        });

        scene.add(gltf.scene);

        // 3. Kamera Ayarları (Blender vs Manuel)
        const blenderCamera = gltf.cameras[0]; 
        if (blenderCamera) {
          camera = blenderCamera;
          camera.aspect = window.innerWidth / window.innerHeight;
          if (window.innerWidth < 768) {
             camera.fov = 33;
          }
          camera.updateProjectionMatrix();
        } else {
          const isMobile = window.innerWidth < 768;
          camera.position.set(0, 1.2, isMobile ? 8 : 2); 
          camera.lookAt(0, 1, 0);
        }

        // 4. Animasyon Başlatma
        mixer = new THREE.AnimationMixer(gltf.scene);
        if (gltf.animations.length > 0) {
            gltf.animations.forEach((clip) => {
                const action = mixer.clipAction(clip);
                action.setLoop(THREE.LoopOnce);
                action.clampWhenFinished = true;
                action.play();
            });
        }

        // Animasyon bitince geçiş yap
        mixer.addEventListener('finished', () => {
          setTimeout(startFadeAndFinish, 300);
        });

        // Loading ekranını kaldır
        setTimeout(() => {
          setIsLoading(false);
        }, 300); 
      }, 
      (xhr) => {
        if (xhr.lengthComputable && xhr.total > 0) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          setProgress(Math.min(Math.round(percentComplete), 99));
        }
      },
      (error) => {
        console.error('Model Yükleme Hatası:', error);
        onFinish();
      }
    );

    // Yedek Işıklar
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // --- Render Döngüsü ---
    const updateSize = () => {
        if(!canvasRef.current) return;
        const w = window.innerWidth;
        const h = window.innerHeight;
        renderer.setSize(w, h);
        if(camera) {
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }
    };
    window.addEventListener('resize', updateSize);

    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mixer) mixer.update(delta);

      // --- AYNA GÜNCELLEME ---
      // Eğer ayna ve kamera hazırsa:
      if (mirrorMesh && cubeCamera) {
        // 1. Aynayı görünmez yap (Kendi içinden kendini çekmemesi için)
        mirrorMesh.visible = false;
        
        // 2. Sanal kamerayla fotoğraf çek
        cubeCamera.update(renderer, scene);
        
        // 3. Aynayı tekrar görünür yap
        mirrorMesh.visible = true;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      scene.clear();
      if(cubeRenderTarget) cubeRenderTarget.dispose();
    };
  }, [isMounted, isVisible, startFadeAndFinish, onFinish]); 

  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 w-full h-[100dvh] z-[9999] bg-black touch-none select-none overflow-hidden">
      <canvas 
        ref={canvasRef} 
        onClick={!isLoading ? startFadeAndFinish : undefined}
        className={`w-full h-full block transition-opacity duration-1000 ease-in-out cursor-pointer ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
      />
      
      {/* Loading Arayüzü */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-700 pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* LOGO (Sabit) */}
        <div className="relative w-28 h-12 mb-4">
            <Image src="/logo.png" alt="ER Asansör" fill className="object-contain" priority />
        </div>

        {/* KOD İLE ÇİZİLMİŞ DÖNEN KASNAK (SVG) */}
        <div className="mb-6">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 bg-[#fee123] rounded-full opacity-5 blur-md"></div>
                
                {/* SVG Çizimi - Dönen Kısım */}
                <svg 
                    className="w-full h-full text-[#fee123] animate-[spin_3s_linear_infinite]" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="50" cy="50" r="42" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" stroke="none" />
                    <line x1="50" y1="14" x2="50" y2="86" strokeWidth="6" />
                    <line x1="18.8" y1="32" x2="81.2" y2="68" strokeWidth="6" />
                    <line x1="18.8" y1="68" x2="81.2" y2="32" strokeWidth="6" />
                    {/* Vida detayları */}
                    <circle cx="50" cy="25" r="3" fill="black" stroke="none" />
                    <circle cx="50" cy="75" r="3" fill="black" stroke="none" />
                    <circle cx="28" cy="38" r="3" fill="black" stroke="none" />
                    <circle cx="72" cy="62" r="3" fill="black" stroke="none" />
                    <circle cx="28" cy="62" r="3" fill="black" stroke="none" />
                    <circle cx="72" cy="38" r="3" fill="black" stroke="none" />
                </svg>
            </div>
        </div>

        {/* METİN ALANI */}
        <div className="flex flex-col items-center mb-4">
            <div className="text-[#fee123] font-black text-sm md:text-base tracking-[0.15em] uppercase text-center animate-pulse">
              ASANSÖRÜNÜZ PROJELENDİRİLİYOR
            </div>
            <div className="text-white/60 text-xs font-mono mt-1 tracking-widest">
              %{progress}
            </div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-gray-900 rounded-full overflow-hidden border border-gray-800">
          <div 
            className="h-full bg-[#fee123] transition-all duration-300 ease-out shadow-[0_0_10px_#fee123]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Siyah Fade Perdesi */}
      <div className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`} />

      {/* Geçmek için dokun yazısı */}
      {!isFading && !isLoading && (
        <div className="absolute bottom-12 left-0 w-full text-center px-6 pointer-events-none animate-in fade-in duration-1000">
          <div className="text-white/40 text-[10px] font-light tracking-[0.3em] animate-pulse uppercase">
             Atlamak İçin Dokunun
          </div>
        </div>
      )}
    </div>
  );
}
