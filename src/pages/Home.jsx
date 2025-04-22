import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import HomeInfo from '../components/Homeinfo';
import LowpolyFox from '../models/LowpolyFox';
import SkyBox from '../models/SkyBox';
import FlyingBird from '../models/FlyingBird';
import FloatingFox from '../models/FloatingFox';

import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPostion = [0, -6.5, -43];
    let rotation = [0, 5.8, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.3, 1.3, 1.3];
    } else {
      screenScale = [1.7, 1.7, 1.7];
    }

    return [screenScale, screenPostion, rotation];
  };

  useEffect(() => {
    const handleFirstClick = async () => {
      try {
        await audioRef.current.play();
        setIsPlayingMusic(true);
        document.removeEventListener('click', handleFirstClick);
      } catch (err) {
        console.warn('Autoplay blocked or failed:', err);
      }
    };

    document.addEventListener('click', handleFirstClick);

    return () => {
      document.removeEventListener('click', handleFirstClick);
    };
  }, []);

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [3, -5.8, -5];
    } else {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [3, -10, -3 ];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" intensity={1} />
          <FloatingFox
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 5.8, 0]}
          />

          <FlyingBird />

          <SkyBox isRotating={isRotating} scale={[1.5, 1.5, 1.5]} />
          <LowpolyFox
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
