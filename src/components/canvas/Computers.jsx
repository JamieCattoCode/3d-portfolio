import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const romanFountain = useGLTF('./roman_fountain/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={Math.PI/6}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} /> */}
      <primitive
        object={romanFountain.scene}
        scale={isMobile ? 0.005 : 0.01}
        position={isMobile ? [-2, -1.5, -1.5] : [-1.6, -2.5, -1.5]}
        rotation={[0.1, 0.1, -0.1]} />
    </mesh>
  )
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: isMobile ? [15, 3, 8] : [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense 
          fallback={<CanvasLoader />}
        >
          <OrbitControls 
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={isMobile ? Math.PI / 2 : Math.PI / 3} 
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas;