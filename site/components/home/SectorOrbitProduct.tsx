'use client';

import { Component, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF } from '@react-three/drei';
import { MathUtils, type Group } from 'three';

/**
 * The product plate inside the sector orbit card. One persistent Canvas swaps
 * the GLB for the engaged sector so hovering never creates a new WebGL
 * context. Model placement values are carried over from the earlier runway
 * stage, where each GLB was framed by hand.
 */

export type SectorProductKind =
  | 'catheter'
  | 'engine'
  | 'hub-motor'
  | 'stepper-driver'
  | 'consumer-pump';

export type ProductStatus = 'idle' | 'loading' | 'ready' | 'failed';

type Vec3 = [number, number, number];

type ModelConfig = {
  url: string;
  scale: number;
  position: Vec3;
  modelRotation: Vec3;
  baseRotation: Vec3;
};

const dracoPath = '/draco-gltf/';

export const productModels: Record<SectorProductKind, ModelConfig> = {
  catheter: {
    url: '/models/veemap-urine-catheter.glb',
    scale: 3.6,
    position: [0, -0.05, 0],
    modelRotation: [0.05, 0, 0.12],
    baseRotation: [0.18, -0.18, -0.04],
  },
  engine: {
    url: '/models/veemap-v8-engine.glb',
    scale: 2.1,
    position: [0.03, -0.64, 0.76],
    modelRotation: [0.08, 0, 0],
    baseRotation: [0.12, -0.34, 0],
  },
  'hub-motor': {
    url: '/models/veemap-hub-motor.glb',
    scale: 8.2,
    position: [0.22, 0.12, -0.14],
    modelRotation: [0, 0, 0],
    baseRotation: [0.1, -0.2, 0],
  },
  'stepper-driver': {
    url: '/models/veemap-stepper-driver.glb',
    scale: 60,
    position: [0, 0.02, -0.29],
    modelRotation: [0, 0, 0],
    baseRotation: [0.12, -0.3, 0],
  },
  'consumer-pump': {
    url: '/models/veemap-consumer-pump.glb',
    scale: 22,
    position: [-0.79, -0.75, 0],
    modelRotation: [0, 0, -Math.PI / 2],
    baseRotation: [0.08, -0.28, 0],
  },
};

export type SectorProduct = { kind: SectorProductKind; name: string; label: string };

/** Product shown for each sector slug. Medical leads, so it is preloaded first. */
export const sectorProducts: Record<string, SectorProduct> = {
  'medical-pharma': { kind: 'catheter', name: 'Urinary catheter', label: '3D urinary catheter product model' },
  automotive: { kind: 'engine', name: 'V8 engine', label: 'Conceptual 3D automotive engine model' },
  'ev-solutions': { kind: 'hub-motor', name: 'Hub motor', label: 'Conceptual 3D electric vehicle hub motor' },
  electronics: { kind: 'stepper-driver', name: 'Stepper driver', label: '3D stepper driver board assembly' },
  'consumer-goods': { kind: 'consumer-pump', name: 'Dispensing pump', label: 'Conceptual 3D consumer dispensing pump' },
};

const preloadOrder: SectorProductKind[] = ['catheter', 'consumer-pump', 'stepper-driver', 'hub-motor', 'engine'];

type StageProps = {
  kind: SectorProductKind;
  live: boolean;
  reducedMotion: boolean;
  preload: boolean;
  onStatus: (status: ProductStatus) => void;
};

export function SectorProductStage({ kind, live, reducedMotion, preload, onStatus }: StageProps) {
  return (
    <CanvasBoundary onError={onStatus}>
      <Canvas
        frameloop={live && !reducedMotion ? 'always' : 'demand'}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [3.1, 2.1, 4.6], fov: 28, near: 0.1, far: 30 }}
      >
        <ambientLight intensity={0.42} />
        <hemisphereLight args={['#dce8ed', '#131719', 1.05]} />
        <directionalLight position={[4, 6, 5]} intensity={3.2} color="#fff7ef" />
        <directionalLight position={[-4, 2, -2]} intensity={0.8} color="#9ebed0" />
        <Environment resolution={32} frames={1}>
          <Lightformer position={[0, 5, 4]} scale={[6, 2, 1]} intensity={2.4} color="#fff4eb" />
          <Lightformer position={[-4, 2, -2]} scale={[3, 4, 1]} intensity={0.8} color="#8aa8b8" />
          <Lightformer position={[4, 0, -1]} scale={[2, 3, 1]} intensity={1.1} color="#fa4c14" />
        </Environment>

        <mesh position={[0, -1.004, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.6, 1.1, 1]}>
          <circleGeometry args={[1, 64]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.4} depthWrite={false} />
        </mesh>

        <Suspense fallback={<StatusFlag key={`loading-${kind}`} value="loading" onStatus={onStatus} />}>
          <ProductBoundary resetKey={kind} onError={onStatus}>
            <ImportedProduct key={kind} {...productModels[kind]} reducedMotion={reducedMotion} />
            <StatusFlag key={`ready-${kind}`} value="ready" onStatus={onStatus} />
          </ProductBoundary>
        </Suspense>

        {preload && (
          <SilentBoundary>
            <Suspense fallback={null}>
              <PreloadChain />
            </Suspense>
          </SilentBoundary>
        )}
      </Canvas>
    </CanvasBoundary>
  );
}

function StatusFlag({ value, onStatus }: { value: ProductStatus; onStatus: (status: ProductStatus) => void }) {
  useEffect(() => {
    onStatus(value);
  }, [value, onStatus]);
  return null;
}

/** Loads the remaining GLBs one at a time so the first hover is not queued behind five downloads. */
function PreloadChain() {
  const [index, setIndex] = useState(0);
  const url = preloadOrder[index] ? productModels[preloadOrder[index]].url : null;
  if (!url) return null;
  return <PreloadOne key={url} url={url} onDone={() => setIndex((current) => current + 1)} />;
}

function PreloadOne({ url, onDone }: { url: string; onDone: () => void }) {
  useGLTF(url, dracoPath);
  useEffect(() => {
    onDone();
  }, [onDone]);
  return null;
}

type BoundaryProps = { children: ReactNode; resetKey?: string; onError?: (status: ProductStatus) => void };

class ProductBoundary extends Component<BoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError?.('failed');
  }

  componentDidUpdate(previous: BoundaryProps) {
    if (previous.resetKey !== this.props.resetKey && this.state.failed) {
      this.setState({ failed: false });
    }
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

class SilentBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {}

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** Catches WebGL context failures around the Canvas itself. */
class CanvasBoundary extends Component<BoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError?.('failed');
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function ImportedProduct({
  url,
  scale,
  position,
  modelRotation,
  baseRotation,
  reducedMotion,
}: ModelConfig & { reducedMotion: boolean }) {
  const root = useRef<Group>(null);
  const { scene } = useGLTF(url, dracoPath);

  useFrame((state, delta) => {
    if (reducedMotion || !root.current) return;
    const turn = state.clock.elapsedTime * 0.22;
    root.current.rotation.x = MathUtils.damp(root.current.rotation.x, baseRotation[0], 4.5, delta);
    root.current.rotation.y = baseRotation[1] + turn;
    root.current.position.y = MathUtils.damp(root.current.position.y, position[1], 4.5, delta);
    const settled = MathUtils.damp(root.current.scale.x, 1, 5.5, delta);
    root.current.scale.setScalar(settled);
  });

  return (
    <group
      ref={root}
      position={[position[0], reducedMotion ? position[1] : position[1] - 0.22, position[2]]}
      rotation={baseRotation}
      scale={reducedMotion ? 1 : 0.8}
      dispose={null}
    >
      <group rotation={modelRotation} scale={scale}>
        <primitive object={scene} />
      </group>
    </group>
  );
}
