"use client";
import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'; 
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'; 
import Image from 'next/image';

export default function Intro({ onFinish }) {
  const canvasRef = useRef();
  
  // REACT SSR HATASINI ÇÖZMEK İÇİN: 
  // Sadece client tarafında olduğumuzda render alacağız.
  const [isMounted, setIsMounted] = useState(false);
  
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Component mount olduğunda işaretle
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
    // Eğer component mount olmadıysa veya görünür değilse çık
    if (!isMounted || !isVisible) return;

    // --- THREE.JS BAŞLANGIÇ ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); 

    // --- HDR YÜKLEME (HATA YÖNETİMİ EKLENDİ) ---
    // Eğer studio.hdr yoksa veya bozuksa site çökmesin diye try-catch mantığı gibi çalışır
    const rgbeLoader = new RGBELoader();
    rgbeLoader.setPath('/'); // Public klasörü
    rgbeLoader.load(
        'studio.hdr', // Dosya adının public içinde doğru olduğundan emin ol!
        function (texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
        },
        undefined, // onProgress
        function (error) {
            console.error("HDR Yüklenemedi, metal parlamayabilir:", error);
            // HDR yüklenemezse varsayılan ışıklarla devam eder, site çökmez.
        }
    );

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
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const updateSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      if (camera) {
        camera.aspect = w / h;
        if (w < 768) {
          camera.position.z = 6; 
          camera.fov = 50; 
        } else {
          camera.position.z = 4;
          camera.fov = 35;
        }
        camera.updateProjectionMatrix();
      }
    };

    let mixer;
    const loader = new GLTFLoader();
    
    loader.load(
      '/erasansor-createdby-dogukankaya.glb', 
      (gltf) => {
        setProgress(100);

        // --- AYNA (REFLECTOR) AYARLARI ---
        gltf.scene.traverse((child) => {
          if (child.isMesh && child.name.includes('Mirror')) { 
            const mirrorGeometry = child.geometry.clone();
            const mirror = new Reflector(mirrorGeometry, {
              clipBias: 0.003,
              textureWidth: window.innerWidth * window.devicePixelRatio,
              textureHeight: window.innerHeight * window.devicePixelRatio,
              color: 0x888888,
              recursion: 1
            });
            mirror.position.copy(child.position);
            mirror.rotation.copy(child.rotation);
            mirror.scale.copy(child.scale);
            child.parent.add(mirror);
            child.parent.remove(child);
          }
          
          // --- RENK DÜZELTME (Pembeleşmeyi önlemek için) ---
          // Kapı veya metal kısımların rengini beyaza zorluyoruz
          if (child.isMesh && (child.name.includes('Kapi') || child.name.includes('Door') || child.material.metalness > 0.5)) {
               // child.material.color.set(0xffffff); // Gerekirse açabilirsin
          }
        });

        scene.add(gltf.scene);

        const blenderCamera = gltf.cameras[0]; 
        if (blenderCamera) {
          camera = blenderCamera;
          camera.aspect = window.innerWidth / window.innerHeight;
          if (window.innerWidth < 768) camera.fov = 95;
          camera.updateProjectionMatrix();
        } else {
          const isMobile = window.innerWidth < 768;
          camera.position.set(0, 1.2, isMobile ? 10 : 4); 
          camera.lookAt(0, 1, 0);
        }

        updateSize(); // Kamerayı ve boyutu tekrar ayarla

        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.setLoop(THREE.LoopOnce);
          action.clampWhenFinished = true;
          action.play();
        });

        mixer.addEventListener('finished', () => {
          setTimeout(startFadeAndFinish, 300);
        });

        setTimeout(() => {
          setIsLoading(false);
        }, 300); 
      }, 
      (xhr) => {
        if (xhr.lengthComputable && xhr.total > 0) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          setProgress(Math.min(Math.round(percentComplete), 100));
        }
      },
      (error) => {
        console.error('Model hatası:', error);
        onFinish();
      }
    );

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(2, 5, 5);
    scene.add(directionalLight);

    window.addEventListener('resize', updateSize);

    const clock = new THREE.Clock();
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      scene.clear();
    };
  }, [isVisible, startFadeAndFinish, onFinish, isMounted]); // isMounted dependency eklendi

  // Eğer client tarafında değilsek veya görünür değilsek hiçbir şey render etme (SSR Hatası önleyici)
  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 w-full h-[100dvh] z-[9999] bg-black touch-none select-none overflow-hidden">
      <canvas 
        ref={canvasRef} 
        onClick={!isLoading ? startFadeAndFinish : undefined}
        className={`w-full h-full block transition-opacity duration-1000 ease-in-out cursor-pointer ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
      />
      
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-700 pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-20 h-20 mb-6 animate-pulse">
            <Image src="/logo.png" alt="ER Asansör" fill className="object-contain" />
        </div>
        <div className="text-[#fee123] font-black text-sm tracking-[0.2em] mb-2">
          YÜKLENİYOR %{progress}
        </div>
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#fee123] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`} />
      
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
