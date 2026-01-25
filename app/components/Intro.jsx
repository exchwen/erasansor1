"use client";
import { useEffect, useRef, useState, useCallback } from 'react'; // useCallback eklendi
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Intro({ onFinish }) {
  const canvasRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // 1. useCallback ile fonksiyonu hafızaya alıyoruz (Build hatasını çözer)
  const startFadeAndFinish = useCallback(() => {
    if (isFading) return; 
    setIsFading(true);
    
    setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 800); 
  }, [isFading, onFinish]); // Bağımlılıklar eklendi

  useEffect(() => {
    if (!isVisible) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); 

    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      antialias: true,
      alpha: false 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    let mixer;
    const loader = new GLTFLoader();
    
    loader.load('/erasansor-createdby-dogukankaya.glb', (gltf) => {
      scene.add(gltf.scene);

      const blenderCamera = gltf.cameras[0]; 
      if (blenderCamera) {
        camera = blenderCamera;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      } else {
        camera.position.set(0, 1.2, 4); 
        camera.lookAt(0, 1, 0);
      }

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

    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(2, 5, 5);
    scene.add(directionalLight);

    const handleResize = () => {
      if (camera) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);

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
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      scene.clear();
    };
    // 2. Bağımlılık dizisine eksik olanları ekledik
  }, [isVisible, onFinish, startFadeAndFinish]); 

  if (!isVisible) return null;

  return (
    <div 
      onClick={startFadeAndFinish}
      className="fixed top-0 left-0 w-full h-screen z-[9999] bg-black cursor-pointer"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      
      <div 
        className={`absolute inset-0 bg-black pointer-events-none transition-opacity duration-700 ease-in-out ${isFading ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {!isFading && (
        <div className="absolute top-10 right-10 text-white/30 text-xs font-light tracking-widest animate-pulse pointer-events-none uppercase">
          ATLAMAK İÇİN TIKLAYIN
        </div>
      )}
    </div>
  );
}