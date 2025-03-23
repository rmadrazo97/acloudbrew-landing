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
        color="#B68D6E" 
        metalness={0.3}
        roughness={0.5}
        clearcoat={0.8}
        clearcoatRoughness={0.2}
      />
    </Box>
  );
};

// Console log to debug if component renders
console.log('HeroBanner component is rendering');

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl p-6 sm:p-10 md:p-16 bg-gradient-to-br from-coffee-cream via-coffee-light to-coffee-medium dark:from-coffee-dark dark:via-coffee-medium dark:to-coffee-espresso">
      {/* Coffee gradient animation overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-light via-coffee-medium to-coffee-dark animate-gradient-x bg-[length:300%_300%]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-cream via-coffee-accent to-coffee-espresso animate-gradient-y bg-[length:300%_300%]"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Text content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-coffee-espresso dark:text-coffee-cream">
            Brewed for the 
            <span className="relative">
              <span className="bg-gradient-to-r from-coffee-medium via-coffee-accent to-coffee-dark bg-clip-text text-transparent animate-pulse"> Future of Tech</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-coffee-espresso/80 dark:text-coffee-cream/80 max-w-lg">
            At A Cloud Brew Studios, we craft high-quality software solutions with the precision of seasoned engineers and the care of artisan brewers. From fullstack development to cloud-native architecture and AI-driven automations—every line of code is thoughtfully brewed to elevate your business.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="default" className="bg-coffee-espresso hover:bg-coffee-dark text-coffee-cream border-coffee-dark">
              ☕ Get a Consultation
            </Button>
            <Button variant="outline" className="border-coffee-medium text-coffee-espresso hover:bg-coffee-light dark:text-coffee-cream">
              📚 See Our Services
            </Button>
          </div>
        </div>
        
        {/* 3D Cube replacing the coffee animation */}
        <div className="flex-1 h-72 flex items-center justify-center" style={{ minHeight: '300px' }}>
          <div className="w-full h-full" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Suspense fallback={<div className="text-center p-10 bg-coffee-light">Loading 3D model...</div>}>
              <Canvas 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  width: '100%', 
                  height: '100%', 
                  zIndex: 10,
                  background: 'transparent'
                }}
                camera={{ position: [0, 0, 8], fov: 40 }}
                shadows
                dpr={[1, 2]}
              >
                <color attach="background" args={['transparent']} />
                <ambientLight intensity={0.8} />
                <directionalLight 
                  position={[10, 10, 5]} 
                  intensity={1.5} 
                  castShadow 
                  shadow-mapSize-width={512} 
                  shadow-mapSize-height={512}
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