import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useEffect, useRef } from 'react';

type GLTFResult = GLTF & {
  nodes: {
    Object_7: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    Object_11: THREE.SkinnedMesh;
    Object_13: THREE.SkinnedMesh;
    Object_15: THREE.SkinnedMesh;
    Object_17: THREE.SkinnedMesh;
    Object_19: THREE.SkinnedMesh;
    Object_21: THREE.SkinnedMesh;
    Object_23: THREE.SkinnedMesh;
    Object_25: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Body: THREE.MeshStandardMaterial;
    Wolf3D_Glasses: THREE.MeshStandardMaterial;
    Wolf3D_Hair: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
  };
};

export function Human(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/3d_character_young_boy.glb'
  ) as GLTFResult;

  const group = useRef<THREE.Group>(null!);

  useEffect(() => {
    group.current.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      (child.material as THREE.MeshStandardMaterial).color = new THREE.Color(
        'red'
      );
    });
  }, []);
  return (
    <group {...props} dispose={null} position={[0, 1, 0]} ref={group}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_9.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.Object_9.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_11.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Object_11.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_13.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Object_13.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_15.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Object_15.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_17.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Object_17.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_19.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Object_19.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_21.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Object_21.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_23.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Object_23.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_25.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Object_25.skeleton}
      />
    </group>
  );
}

useGLTF.preload('/3d_character_young_boy.glb');
