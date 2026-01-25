"use client";
import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Image from 'next/image'; // Logo için eklendi

export default function Intro({ onFinish }) {
  const canvasRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  
  // YENİ: Yükleme durumu ve yüzdesi için state
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const startFadeAndFinish = useCallback(() => {
    if (isFading) return; 
    setIsFading(true);
    
    setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 800); 
  }, [isFading, onFinish]);

  useEffect(() => {
    if (!isVisible) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); 

    const initialFov = window.innerWidth < 768 ? 85 : 75;
    let camera = new THREE.PerspectiveCamera(initialFov, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });

    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      if (camera) {
        camera.aspect = width / height;
        if (width < 768) {
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
    
    // YENİ: Loader'a progress (ilerleme) takibi eklendi
    loader.load(
      '/erasansor-createdby-dogukankaya.glb', 
      (gltf) => {
        // 1. YÜKLEME TAMAMLANDIĞINDA
        scene.add(gltf.scene);

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

        updateSize();

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

        // YENİ: Yükleme bitti, loading ekranını kapat
        setTimeout(() => {
          setIsLoading(false);
        }, 100); // Çok kısa bir gecikme ekleyerek render'ın oturmasını sağlıyoruz
      }, 
      (xhr) => {
        // 2. YÜKLEME SIRASINDA (Progress)
        if (xhr.lengthComputable) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          setProgress(Math.round(percentComplete));
        }
      },
      (error) => {
        console.error('Model yüklenirken hata:', error);
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
  }, [isVisible, startFadeAndFinish, onFinish]); 

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 w-full h-[100dvh] z-[9999] bg-black touch-none select-none overflow-hidden"
    >
      {/* 3D CANVAS - Yüklenene kadar gizli (opacity-0) */}
      <canvas 
        ref={canvasRef} 
        onClick={!isLoading ? startFadeAndFinish : undefined}
        className={`w-full h-full block transition-opacity duration-1000 ease-in-out cursor-pointer ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
      />
      
      {/* YENİ: YÜKLEME EKRANI (PRELOADER) */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black transition-opacity duration-700 pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Logo */}
        <div className="relative w-20 h-20 mb-6 animate-pulse">
            <Image src="/logo.png" alt="ER Asansör" fill className="object-contain" />
        </div>

        {/* Yüzdelik Yazısı */}
        <div className="text-[#fee123] font-black text-sm tracking-[0.2em] mb-2">
          YÜKLENİYOR %{progress}
        </div>

        {/* Progress Bar Çubuğu */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#fee123] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Intro Bitiş Fade Efekti */}
      <div 
        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* "Atlamak İçin" Yazısı - Sadece yüklendikten sonra görünür */}
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