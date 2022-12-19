/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/3D SOCKYS.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.07, 0.22, 0.02]}
        rotation={[-Math.PI / 2, 1.31, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom"].geometry}
          material={materials.TQ_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_1"].geometry}
          material={materials.TQ_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_2"].geometry}
          material={materials.TQ_ARD_edge}
        />
      </group>
      <group
        position={[0.07, 0.05, 0.02]}
        rotation={[-Math.PI / 2, 1.31, Math.PI / 2]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom"].geometry}
          material={materials.TQ_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_1"].geometry}
          material={materials.TQ_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ_ARD-geom_2"].geometry}
          material={materials.TQ_ARD_edge}
        />
      </group>
      <group position={[0.08, 0.19, 0.02]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ2_ARD-geom"].geometry}
          material={materials.TQ2_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ2_ARD-geom_1"].geometry}
          material={materials.TQ2_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ2_ARD-geom_2"].geometry}
          material={materials.TQ2_ARD_edge}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3D SOCKYS.gltf");
