import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

// Animated 3D Cube component with coffee theme
const Cube = () => {
  const meshRef = useRef();
  
  // Animation loop for rotation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 4) * 0.3;
    meshRef.current.rotation.y = Math.sin(time / 2) * 0.4 + time * 0.2;
  });

  return (
    <Box ref={meshRef} args={[3, 3, 3]} castShadow receiveShadow>
      <meshPhysicalMaterial 
        color="#8B5A2B" 
        metalness={0.4}
        roughness={0.4}
        clearcoat={0.9}
        clearcoatRoughness={0.2}
      />
    </Box>
  );
};

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl p-6 sm:p-10 md:p-16 bg-gradient-to-br from-coffee-medium via-coffee-dark to-coffee-espresso dark:from-coffee-dark dark:via-coffee-espresso dark:to-black">
      {/* Coffee gradient animation overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-medium via-coffee-dark to-coffee-espresso animate-gradient-x bg-[length:300%_300%]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-medium via-coffee-dark to-coffee-espresso animate-gradient-y bg-[length:300%_300%]"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Text content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-coffee-cream dark:text-coffee-cream">
            Brewed for the 
            <span className="relative">
              <span className="text-coffee-accent animate-pulse"> Future of Tech</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-coffee-cream/90 dark:text-coffee-cream/90 max-w-lg">
            At A Cloud Brew Studios, we craft high-quality software solutions with the precision of seasoned engineers and the care of artisan brewers. From fullstack development to cloud-native architecture and AI-driven automations—every line of code is thoughtfully brewed to elevate your business.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-6">
            <Button 
              className={cn(
                "bg-coffee-accent hover:bg-coffee-accent/90 text-coffee-cream",
                "shadow-sm rounded-md px-6 py-2 font-medium transition-colors",
                "border border-coffee-accent/20"
              )}
            >
              Get a Consultation
            </Button>
            <Button 
              variant="outline" 
              className={cn(
                "bg-transparent hover:bg-coffee-dark/20 text-coffee-cream",
                "border border-coffee-cream/20 shadow-sm rounded-md px-6 py-2",
                "font-medium transition-all"
              )}
            >
              See Our Services
            </Button>
          </div>
        </div>
        
        {/* 3D Cube replacing the coffee animation */}
        <div className="flex-1 h-72 flex items-center justify-center" style={{ minHeight: '300px' }}>
          <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'transparent' }}>
            <Suspense fallback={<div className="text-center p-10 text-coffee-cream">Loading 3D model...</div>}>
              <Canvas 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                  zIndex: 10,
                  backgroundColor: 'transparent'
                }}
                camera={{ position: [0, 0, 8], fov: 40 }}
                shadows
                dpr={[1, 2]}
                gl={{ 
                  alpha: true,
                  antialias: true,
                  preserveDrawingBuffer: true
                }}
              >
                <ambientLight intensity={0.6} />
                <directionalLight 
                  position={[10, 10, 5]} 
                  intensity={2.0} 
                  castShadow 
                  shadow-mapSize-width={512} 
                  shadow-mapSize-height={512}
                  color="#FFF8E1"
                />
                <Cube />
                <OrbitControls 
                  enableZoom={false} 
                  enablePan={false}
                  autoRotate={true}
                  autoRotateSpeed={1.5}
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 1.5}
                />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 