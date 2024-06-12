import { BackSide } from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';
import {
	Box,
	CameraControls,
	Environment,
	PerspectiveCamera,
	Sphere,
} from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import {
	BallCollider,
	CuboidCollider,
	Physics,
	RapierRigidBody,
	RigidBody,
} from '@react-three/rapier';

const Scene = () => {
	const cameraRef = useRef<THREE.PerspectiveCamera>(null!);
	useEffect(() => {
		cameraRef.current.lookAt(0, 0, 0);
	}, []);

	const myBall = useRef<RapierRigidBody>(null);

	const applyImpulse = () => {
		myBall.current?.applyImpulse({ x: 10, y: 0, z: 0 }, true);
	};

	const [ballColor, setBallColor] = useState<'purple' | 'green'>(
		'purple'
	);

	return (
		<>
			{/* Camera */}
			<PerspectiveCamera
				makeDefault
				position={[0, 5, 15]}
				ref={cameraRef}
			/>
			<CameraControls
				maxAzimuthAngle={degToRad(90)}
				minAzimuthAngle={degToRad(-90)}
				maxPolarAngle={degToRad(90)}
			/>
			<Environment files='deneme.hdr' background blur={0.3} />

			{/* Materials on the Scene */}
			<Physics debug>
				<RigidBody colliders='ball' position={[0, 5, 0]} ref={myBall}>
					<Sphere args={[1]} onClick={applyImpulse}>
						<meshStandardMaterial color={ballColor} />
					</Sphere>
				</RigidBody>

				<RigidBody
					sensor
					type='fixed'
					position={[5, 1, 1]}
					onIntersectionEnter={() => {
						console.log('Goal');
						setBallColor('green');
					}}>
					<CuboidCollider args={[1, 1, 5]} />
				</RigidBody>

				{/* Platform */}
				<RigidBody type='fixed' friction={3} name='platform'>
					<mesh rotation={[degToRad(90), 0, 0]} receiveShadow>
						<planeGeometry args={[50, 50]} />
						<meshStandardMaterial color='green' side={BackSide} />
					</mesh>
				</RigidBody>
			</Physics>

			<ambientLight intensity={1} />
			<spotLight position={[-1, 2, 0]} intensity={50} castShadow />
		</>
	);
};

export default Scene;
