"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleWaveMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color('#00BFA5'),
    uSize: 15.0,
  },
  `
  uniform float uTime;
  uniform float uSize;
  attribute float aRandom;
  varying float vAlpha;
  
  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    float wave = sin(modelPosition.x * 0.15 + uTime * 0.1 + aRandom * 5.0);
    modelPosition.y += wave * 0.15; 
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;
    
    gl_Position = projectionPosition;
    gl_PointSize = uSize * (1.0 / -viewPosition.z) * aRandom * 1.5;
    
    vAlpha = smoothstep(0.0, 0.15, abs(wave));
  }
  `,
  `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    if (distanceToCenter > 0.5) {
      discard;
    }
    
    float opacity = 0.8 - (distanceToCenter * 0.5);
    
    gl_FragColor = vec4(uColor, opacity * vAlpha);
  }
  `
);
ParticleWaveMaterial.key = THREE.MathUtils.generateUUID();
extend({ ParticleWaveMaterial });


function ParticleField() {
  const materialRef = useRef();
  const count = 3000;

  const { positions, randoms } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      positions.set([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 10
      ], i * 3);
      randoms[i] = Math.random() * 0.5 + 0.5;
    }
    return { positions, randoms };
  }, [count]);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uTime = clock.getElapsedTime();
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          count={count}
          array={randoms}
          itemSize={1}
        />
      </bufferGeometry>
      <particleWaveMaterial 
        ref={materialRef} 
        key={ParticleWaveMaterial.key} 
        transparent 
        depthWrite={false} 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

const ThreeCanvas = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: 'var(--deep-space)' }}>
      <Canvas camera={{ position: [0, 0.5, 5], fov: 60 }}>
        <ParticleField />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;