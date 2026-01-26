"use client";
import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import Image from 'next/image';

export default function Intro({ onFinish }) {
  const canvasRef = useRef();
  const [isMounted, setIsMounted] = useState(false); // Hydration fix için
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // 1. ADIM: Hydration Hatasını Çözme
  // Component mount olmadan hiçbir şey render etme.
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
    // Sadece client tarafında (tarayıcıda) çalış
    if (!isMounted || !isVisible) return;

    // --- Sahne Kurulumu ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); 

    // Kamera ayarları (window burada güvenli çünkü useEffect içindeyiz)
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

    // --- Loading Manager ---
    // Tüm yüklemeleri buradan takip edeceğiz
    const manager = new THREE.LoadingManager();
    
    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
        // Genel ilerleme (HDR + GLB toplamı)
        // Yüzdeyi biraz yapay artırıyoruz ki kullanıcı akışı hissetsin
        const percent = (itemsLoaded / itemsTotal) * 100;
        // setProgress(Math.round(percent)); // Bunu GLB loader'a bırakabiliriz
    };

    // 2. ADIM: HDR Yükleme (RangeError Çözümü)
    // Dosya yolunun başına '/' koyarak public klasörünü işaret ediyoruz.
    const rgbeLoader = new RGBELoader(manager);
    rgbeLoader.setPath('/'); // Public klasörünü kök al
    rgbeLoader.load(
        'studio.hdr', // Dosya adı (başında / olmadan, çünkü setPath var)
        (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
            console.log("HDR Başarıyla Yüklendi");
        },
        undefined, // onProgress
        (err) => {
            console.error("HDR Yüklenemedi, varsayılan ışıklar kullanılacak.", err);
            // HDR yüklenemese bile uygulama çökmesin diye hata yakaladık.
        }
    );

    // --- GLB Model Yükleme ---
    let mixer;
    const loader = new GLTFLoader(manager);
    
    loader.load(
      '/erasansor-createdby-dogukankaya.glb', // Dosya adını tam kontrol et!
      (gltf) => {
        setProgress(100);
        scene.add(gltf.scene);

        // Kamera varsa modelden al, yoksa manuel ayarla
        const blenderCamera = gltf.cameras[0]; 
        if (blenderCamera) {
          camera = blenderCamera;
          camera.aspect = window.innerWidth / window.innerHeight;
          if (window.innerWidth < 768) {
             camera.fov = 95;
          }
          camera.updateProjectionMatrix();
        } else {
          const isMobile = window.innerWidth < 768;
          camera.position.set(0, 1.2, isMobile ? 10 : 4); 
          camera.lookAt(0, 1, 0);
        }

        // Animasyonlar
        mixer = new THREE.AnimationMixer(gltf.scene);
        if(gltf.animations.length > 0) {
            gltf.animations.forEach((clip) => {
                const action = mixer.clipAction(clip);
                action.setLoop(THREE.LoopOnce);
                action.clampWhenFinished = true;
                action.play();
            });
        }

        mixer.addEventListener('finished', () => {
          setTimeout(startFadeAndFinish, 300);
        });

        // Yükleme ekranını kapat
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
        console.error('Model yüklenirken kritik hata:', error);
        // Hata olsa bile giriş ekranını geç ki kullanıcı takılmasın
        onFinish(); 
      }
    );

    // Yedek Işıklar (HDR yüklenmezse diye)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // --- Resize ve Render Döngüsü ---
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
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      scene.clear();
    };
  }, [isMounted, isVisible, startFadeAndFinish, onFinish]); 

  // Eğer component client tarafında değilse HİÇBİR ŞEY render etme (Hata #418/#425 Çözümü)
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
            <Image src="/logo.png" alt="ER Asansör" fill className="object-contain" priority />
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
