"use client";
import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Intro({ onFinish }) {
  const canvasRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

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

    // ÇÖZÜM: Mobilde (dikey ekran) FOV değerini biraz daha genişletiyoruz (75 -> 85-90)
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
        // ÇÖZÜM: Ekran dikeyse kamerayı otomatik olarak daha geriye itiyoruz
        if (width < 768) {
          camera.position.z = 6; // Daha önce 6'ydı, 10 yaparak uzaklaştırdık
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
    
    loader.load('/erasansor-createdby-dogukankaya.glb', (gltf) => {
      scene.add(gltf.scene);

      const blenderCamera = gltf.cameras[0]; 
      if (blenderCamera) {
        camera = blenderCamera;
        camera.aspect = window.innerWidth / window.innerHeight;
        
        // ÇÖZÜM: Blender kamerası yüklense bile mobilde FOV müdahalesi yapıyoruz
        if (window.innerWidth < 768) {
           camera.fov = 95; // Blender kamerası genellikle dardır, mobilde genişlettik
        }
        camera.updateProjectionMatrix();
      } else {
        // Yedek kamera pozisyonu
        const isMobile = window.innerWidth < 768;
        camera.position.set(0, 1.2, isMobile ? 10 : 4); 
        camera.lookAt(0, 1, 0);
      }

      updateSize(); // Yükleme bittikten sonra boyutları tekrar kontrol et

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

    }, undefined, (error) => {
      console.error('Model yüklenirken hata:', error);
      onFinish();
    });

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
      onClick={startFadeAndFinish}
      className="fixed inset-0 w-full h-[100dvh] z-[9999] bg-black cursor-pointer touch-none select-none overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ${isFading ? 'opacity-100' : 'opacity-0'}`} />
      
      {!isFading && (
        <div className="absolute bottom-12 left-0 w-full text-center px-6 pointer-events-none">
          <div className="text-white/40 text-[10px] font-light tracking-[0.3em] animate-pulse uppercase">
             Atlamak İçin Dokunun
          </div>
        </div>
      )}
    </div>
  );
}