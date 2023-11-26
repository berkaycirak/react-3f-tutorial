import { Canvas } from "@react-three/fiber";
import { BackSide } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 2, 3] }} shadows>
        <mesh position={[0, 0.6, 0]} castShadow>
          <boxGeometry args={[1, 1]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        <mesh rotation={[degToRad(90), 0, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="green" side={BackSide} />
        </mesh>

        <ambientLight intensity={1} />
        <spotLight position={[-1, 2, 0]} intensity={50} castShadow />
      </Canvas>
    </div>
  );
}

export default App;
