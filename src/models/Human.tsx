import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useCharacterAnimation } from '../store';

type GLTFResult = GLTF & {
	nodes: {
		EyeLeft: THREE.SkinnedMesh;
		EyeRight: THREE.SkinnedMesh;
		Wolf3D_Body: THREE.SkinnedMesh;
		Wolf3D_Glasses: THREE.SkinnedMesh;
		Wolf3D_Hair: THREE.SkinnedMesh;
		Wolf3D_Head: THREE.SkinnedMesh;
		Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
		Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
		Wolf3D_Outfit_Top: THREE.SkinnedMesh;
		Wolf3D_Teeth: THREE.SkinnedMesh;
		Hips: THREE.Bone;
	};
	materials: {
		['Wolf3D_Eye.002']: THREE.MeshStandardMaterial;
		['Wolf3D_Body.002']: THREE.MeshStandardMaterial;
		['Wolf3D_Glasses.002']: THREE.MeshStandardMaterial;
		['Wolf3D_Hair.002']: THREE.MeshStandardMaterial;
		['Wolf3D_Skin.002']: THREE.MeshStandardMaterial;
		['Wolf3D_Outfit_Bottom.002']: THREE.MeshStandardMaterial;
		['Wolf3D_Outfit_Footwear.002']: THREE.MeshStandardMaterial;
		['Wolf3D_Outfit_Top.002']: THREE.MeshStandardMaterial;
		['Wolf3D_Teeth.002']: THREE.MeshStandardMaterial;
	};
};

type ActionName = 'Armature|mixamo.com|Layer0' | 'jumping';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Human(props: JSX.IntrinsicElements['group']) {
	const group = useRef<THREE.Group>(null!);
	const { nodes, materials, animations } = useGLTF(
		'/3d_character_young_boy.glb'
	) as GLTFResult;

	const { actions } = useAnimations(animations, group);
	const { updateCurrentAnimation } = useCharacterAnimation();

	useEffect(() => {
		if (Object.values(actions).length > 0) {
			actions['jumping']?.setLoop(THREE.LoopOnce, 1);
			actions['jumping']!.clampWhenFinished = true;
			updateCurrentAnimation(
				actions['jumping'] as THREE.AnimationAction
			);
		}
	}, [actions]);

	return (
		<group ref={group} {...props} dispose={null} position={[0, 0, 0]}>
			<group name='Scene'>
				<group name='MyChar' position={[0, 1, 0]}>
					<skinnedMesh
						name='EyeLeft'
						geometry={nodes.EyeLeft.geometry}
						material={materials['Wolf3D_Eye.002']}
						skeleton={nodes.EyeLeft.skeleton}
					/>
					<skinnedMesh
						name='EyeRight'
						geometry={nodes.EyeRight.geometry}
						material={materials['Wolf3D_Eye.002']}
						skeleton={nodes.EyeRight.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Body'
						geometry={nodes.Wolf3D_Body.geometry}
						material={materials['Wolf3D_Body.002']}
						skeleton={nodes.Wolf3D_Body.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Glasses'
						geometry={nodes.Wolf3D_Glasses.geometry}
						material={materials['Wolf3D_Glasses.002']}
						skeleton={nodes.Wolf3D_Glasses.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Hair'
						geometry={nodes.Wolf3D_Hair.geometry}
						material={materials['Wolf3D_Hair.002']}
						skeleton={nodes.Wolf3D_Hair.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Head'
						geometry={nodes.Wolf3D_Head.geometry}
						material={materials['Wolf3D_Skin.002']}
						skeleton={nodes.Wolf3D_Head.skeleton}
						morphTargetDictionary={
							nodes.Wolf3D_Head.morphTargetDictionary
						}
						morphTargetInfluences={
							nodes.Wolf3D_Head.morphTargetInfluences
						}
					/>
					<skinnedMesh
						name='Wolf3D_Outfit_Bottom'
						geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
						material={materials['Wolf3D_Outfit_Bottom.002']}
						skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Outfit_Footwear'
						geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
						material={materials['Wolf3D_Outfit_Footwear.002']}
						skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Outfit_Top'
						geometry={nodes.Wolf3D_Outfit_Top.geometry}
						material={materials['Wolf3D_Outfit_Top.002']}
						skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
					/>
					<skinnedMesh
						name='Wolf3D_Teeth'
						geometry={nodes.Wolf3D_Teeth.geometry}
						material={materials['Wolf3D_Teeth.002']}
						skeleton={nodes.Wolf3D_Teeth.skeleton}
						morphTargetDictionary={
							nodes.Wolf3D_Teeth.morphTargetDictionary
						}
						morphTargetInfluences={
							nodes.Wolf3D_Teeth.morphTargetInfluences
						}
					/>
					<primitive object={nodes.Hips} />
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/3d_character_young_boy.glb');
