"use client";
import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// 1. EKLENDİ: Reflector kütüphanesini çağırıyoruz
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'; 
import Image from 'next/image';

export default function Intro({ onFinish }) {
  const canvasRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
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

    // --- HDR IŞIKLANDIRMA (Doğru, kalsın) ---
    new RGBELoader()
      .load('/studio.hdr', function (texture) {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.environment = texture;
      });

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
    
    loader.load(
      '/erasansor-createdby-dogukankaya.glb', 
      (gltf) => {
        setProgress(100);

        // --- 2. EKLENDİ: AYNAYI BULUP GERÇEK AYNA YAPMA ---
        gltf.scene.traverse((child) => {
          // DİKKAT: Blender'daki ayna objesinin adını buraya yazmalısın.
          // Örnek: 'Ayna', 'Mirror', 'Plane001' vb.
          if (child.isMesh && child.name.includes('Mirror')) { 
            
            // Reflector oluştur
            const mirrorGeometry = child.geometry.clone(); // Orijinal geometriyi kopyala
            const mirror = new Reflector(mirrorGeometry, {
              clipBias: 0.003,
              textureWidth: window.innerWidth * window.devicePixelRatio,
              textureHeight: window.innerHeight * window.devicePixelRatio,
              color: 0x888888, // Yansıma rengi
              recursion: 1 // Yansıma derinliği
            });

            // Pozisyonu ve dönüşü kopyala
            mirror.position.copy(child.position);
            mirror.rotation.copy(child.rotation);
            mirror.scale.copy(child.scale);

            // Eski mat objeyi kaldır, yerine aynayı koy
            child.parent.add(mirror);
            child.parent.remove(child);
            
            // Eğer aynanın yönü ters ise (bazen olur), şunu aç:
            // mirror.rotateY(Math.PI); 
          }
        });
        // -----------------------------------------------------

        scene.add(gltf.scene);

        // Kamera ve Animasyon ayarları (Aynen devam)
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

  // HTML kısmı aynı kalabilir...
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 w-full h-[100dvh] z-[9999] bg-black touch-none select-none overflow-hidden">
      <canvas 
        ref={canvasRef} 
        onClick={!isLoading ? startFadeAndFinish : undefined}
        className={`w-full h-full block transition-opacity duration-1000 ease-in-out cursor-pointer ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
      />
      {/* Loading ekranı kodları aynen kalsın */}
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
    </div>
  );
}
