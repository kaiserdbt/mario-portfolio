"use client";

/* eslint-disable react-hooks/immutability -- en R3F muto a propósito objetos de three (materiales, rotation de la tapa, bounding box); no son valores inmutables de React */

import { Suspense, useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Bounds,
  Center,
  Environment,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";
import { MathUtils, SRGBColorSpace, type Mesh, type MeshStandardMaterial } from "three";

const OPEN_DEG = 95;
const CLOSED_DEG = 180;

function Mac({ progress }: { progress: RefObject<number> }) {
  const { nodes } = useGLTF("/models/mac.glb");
  const wallpaper = useTexture("/services/screen-wallpaper.webp", (t) => {
    t.colorSpace = SRGBColorSpace;
    t.flipY = false;
    t.anisotropy = 8;
  });
  const keyboard = useTexture("/services/keyboard.webp", (t) => {
    t.colorSpace = SRGBColorSpace;
    t.anisotropy = 8;
  });

  const screen = nodes.screen;
  const matte = nodes.matte as Mesh;
  const mat = matte.material as MeshStandardMaterial;
  mat.map = wallpaper;
  mat.emissiveMap = wallpaper;
  mat.emissive.set("#ffffff");
  mat.emissiveIntensity = 0.55;
  mat.roughness = 0.5;
  mat.metalness = 0;
  mat.needsUpdate = true;

  // afino el cuerpo: aluminio cepillado en vez de espejo (mata el reflejo blanco
  // del notch frontal) y un negro mate con algo más de vida
  nodes.body.traverse((o) => {
    const m = (o as Mesh).material as
      | MeshStandardMaterial
      | MeshStandardMaterial[]
      | undefined;
    const list = Array.isArray(m) ? m : m ? [m] : [];
    for (const mm of list) {
      if (mm.name === "aluminium") {
        mm.roughness = 0.62;
        mm.metalness = 1;
        mm.color.setScalar(0.32);
        mm.envMapIntensity = 1.5; // los cantos recogen más entorno: filo tipo fresnel
        mm.needsUpdate = true;
      } else if (mm.name === "blackmatte") {
        mm.roughness = 0.7;
        mm.metalness = 0.45;
        mm.color.set("#141417");
        mm.needsUpdate = true;
      }
    }
  });

  // dimensiones de la base sacadas del glb (la malla body es un Group con varios
  // materiales, no puedo leerle geometry, así que las dejo fijas)
  const cx = 0.008;
  const cz = -0.587;
  const kbW = 31.48 * 0.9;
  const kbD = 22.06 * 0.84;
  const topY = 0.033 + 0.015;

  useFrame((_, delta) => {
    const p = MathUtils.clamp(progress.current ?? 0, 0, 1);
    const target = MathUtils.degToRad(MathUtils.lerp(OPEN_DEG, CLOSED_DEG, p));
    const k = 1 - Math.pow(0.0005, delta);
    screen.rotation.x += (target - screen.rotation.x) * k;
  });

  return (
    <group>
      <primitive object={nodes.body} />
      <primitive object={screen} />
      <mesh position={[cx, topY, cz]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[kbW, kbD]} />
        <meshStandardMaterial
          map={keyboard}
          transparent
          roughness={0.75}
          metalness={0}
        />
      </mesh>
    </group>
  );
}

export default function LaptopScene({
  progressRef,
}: {
  progressRef?: RefObject<number>;
}) {
  const fallback = useRef(0);
  const progress = progressRef ?? fallback;

  return (
    <Canvas
      camera={{ position: [0, 0.6, 6], fov: 30 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.4} color="#fff2e0" />
      <directionalLight position={[4, 6, 5]} intensity={0.95} color="#fff1dc" />
      {/* luz de la pantalla derramándose sobre el teclado */}
      <pointLight
        position={[0, 0.5, -0.1]}
        intensity={2.6}
        distance={2.6}
        decay={2}
        color="#ffb27a"
      />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.0}>
          <Center>
            <Mac progress={progress} />
          </Center>
        </Bounds>
        <Environment resolution={256}>
          <Lightformer
            intensity={1.5}
            position={[0, 4, 3]}
            scale={[9, 4, 1]}
            color="#fff1da"
          />
          <Lightformer
            intensity={0.9}
            position={[-5, 1, 1]}
            scale={[3, 5, 1]}
            color="#dac5a7"
          />
          <Lightformer
            intensity={0.6}
            position={[5, 0, 2]}
            scale={[3, 3, 1]}
            color="#bcd2e4"
          />
          {/* tira fina y alta por detrás: dibuja un filo de luz en los bordes */}
          <Lightformer
            intensity={2.4}
            position={[0, 5, -3]}
            scale={[10, 0.5, 1]}
            color="#ffffff"
          />
        </Environment>
      </Suspense>
      <ContactShadows
        position={[0, -1.1, 0]}
        opacity={0.35}
        scale={9}
        blur={3}
        far={3}
        color="#000000"
      />
    </Canvas>
  );
}

useGLTF.preload("/models/mac.glb");
