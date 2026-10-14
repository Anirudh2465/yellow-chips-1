'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function WaterPlane() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const { vertexShader, fragmentShader, uniforms } = useMemo(() => {
    const uniforms = {
      uTime:       { value: 0 },
      uWaterColor: { value: new THREE.Color('#1A3A4A') },
      uFoamColor:  { value: new THREE.Color('#c8e0d0') },
      uSunColor:   { value: new THREE.Color('#FFDE00') },
      uSunDir:     { value: new THREE.Vector3(0.4, 0.8, 0.4).normalize() },
    };

    const vertexShader = /* glsl */ `
      uniform float uTime;
      varying vec2  vUv;
      varying float vElevation;
      varying vec3  vNormal;
      varying vec3  vWorldPos;

      float wave(vec2 pos, float freq, float amp, float speed, float angle) {
        vec2 dir = vec2(cos(angle), sin(angle));
        return amp * sin(dot(pos, dir) * freq + uTime * speed);
      }

      void main() {
        vUv = uv;
        vec3 pos = position;

        // Layered wave displacement
        float w  = wave(pos.xz, 0.25, 0.18, 0.6,  0.0);
            w += wave(pos.xz, 0.40, 0.10, 0.9,  0.8);
            w += wave(pos.xz, 0.60, 0.06, 1.2,  2.1);
            w += wave(pos.xz, 1.00, 0.03, 2.0, -0.5);

        pos.y += w;
        vElevation = w;

        // Approximate normal for lighting
        float eps = 0.01;
        float wx = wave((pos.xz + vec2(eps, 0.0)), 0.25, 0.18, 0.6, 0.0)
                 + wave((pos.xz + vec2(eps, 0.0)), 0.40, 0.10, 0.9, 0.8);
        float wz = wave((pos.xz + vec2(0.0, eps)), 0.25, 0.18, 0.6, 0.0)
                 + wave((pos.xz + vec2(0.0, eps)), 0.40, 0.10, 0.9, 0.8);
        vNormal = normalize(vec3(w - wx, eps, w - wz));

        vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = /* glsl */ `
      uniform vec3  uWaterColor;
      uniform vec3  uFoamColor;
      uniform vec3  uSunColor;
      uniform vec3  uSunDir;
      uniform float uTime;

      varying vec2  vUv;
      varying float vElevation;
      varying vec3  vNormal;
      varying vec3  vWorldPos;

      void main() {
        // Base water color with depth variation
        float depth = smoothstep(-0.3, 0.3, vElevation);
        vec3 waterCol = mix(uWaterColor * 0.6, uWaterColor * 1.2, depth);

        // Specular highlight (sun)
        vec3 viewDir = normalize(cameraPosition - vWorldPos);
        vec3 halfDir = normalize(uSunDir + viewDir);
        float spec = pow(max(dot(vNormal, halfDir), 0.0), 64.0);
        vec3 specular = uSunColor * spec * 0.6;

        // Foam at wave crests
        float foam = smoothstep(0.12, 0.20, vElevation) * 0.4;
        vec3 col = mix(waterCol, uFoamColor, foam) + specular;

        // Fresnel edge transparency
        float fresnel = pow(1.0 - max(dot(vNormal, viewDir), 0.0), 3.0);
        float alpha = mix(0.88, 0.98, fresnel);

        gl_FragColor = vec4(col, alpha);
      }
    `;

    return { vertexShader, fragmentShader, uniforms };
  }, []);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
      receiveShadow
    >
      <planeGeometry args={[200, 200, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
