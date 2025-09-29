"use client"

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Line, Text } from '@react-three/drei'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import * as THREE from 'three'

// Blockchain Node Component
function BlockchainNode({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.y += 0.01
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
  })

  return (
    <Sphere ref={meshRef} position={position} args={[0.5 * scale, 16, 16]}>
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.3}
        transparent
        opacity={0.8}
      />
    </Sphere>
  )
}

// Connection Line Component
function ConnectionLine({ start, end, color }: { start: [number, number, number], end: [number, number, number], color: string }) {
  const points = useMemo(() => [start, end], [start, end])
  
  return (
    <Line
      points={points}
      color={color}
      lineWidth={2}
      transparent
      opacity={0.6}
    />
  )
}

// Floating Hash Text Component
function FloatingHash({ position, hash }: { position: [number, number, number], hash: string }) {
  const textRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
  })

  return (
    <group ref={textRef} position={position}>
      <Text
        fontSize={0.3}
        color="#00D4FF"
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.woff"
      >
        {hash}
      </Text>
    </group>
  )
}

// Particle System for Blockchain Data
function BlockchainParticles() {
  const pointsRef = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001
      pointsRef.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00FF88"
        size={0.02}
        transparent
        opacity={0.6}
      />
    </points>
  )
}

// Main 3D Scene Component
function BlockchainScene() {
  const groupRef = useRef<THREE.Group>(null!)
  
  // Define blockchain network nodes
  const nodes = useMemo(() => [
    { position: [-3, 2, -2] as [number, number, number], color: "#00D4FF" }, // Bitcoin
    { position: [3, 1, -1] as [number, number, number], color: "#627EEA" }, // Ethereum
    { position: [-2, -1, 2] as [number, number, number], color: "#00FF88" }, // Sui
    { position: [2, -2, 1] as [number, number, number], color: "#FF6B6B" }, // Aptos
    { position: [0, 3, 0] as [number, number, number], color: "#FFD93D" }, // Center
    { position: [-4, 0, 1] as [number, number, number], color: "#9B59B6" }, // Solana
    { position: [4, -1, -1] as [number, number, number], color: "#E74C3C" }, // Polygon
  ], [])

  // Define connections between nodes
  const connections = useMemo(() => [
    { start: nodes[0].position, end: nodes[4].position, color: "#00D4FF" },
    { start: nodes[1].position, end: nodes[4].position, color: "#627EEA" },
    { start: nodes[2].position, end: nodes[4].position, color: "#00FF88" },
    { start: nodes[3].position, end: nodes[4].position, color: "#FF6B6B" },
    { start: nodes[5].position, end: nodes[4].position, color: "#9B59B6" },
    { start: nodes[6].position, end: nodes[4].position, color: "#E74C3C" },
    { start: nodes[0].position, end: nodes[1].position, color: "#00FFFF" },
    { start: nodes[2].position, end: nodes[3].position, color: "#FF00FF" },
  ], [nodes])

  // Hash strings for floating text
  const hashes = useMemo(() => [
    { position: [-5, 3, 0] as [number, number, number], hash: "0x1a2b3c4d5e6f" },
    { position: [5, -3, 0] as [number, number, number], hash: "0x7f8e9d0c1b2a" },
    { position: [0, -4, 2] as [number, number, number], hash: "0x3c4d5e6f7a8b" },
    { position: [-3, 4, -1] as [number, number, number], hash: "0x9e0f1a2b3c4d" },
  ], [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {/* Blockchain Nodes */}
      {nodes.map((node, index) => (
        <BlockchainNode
          key={index}
          position={node.position}
          color={node.color}
          scale={index === 4 ? 1.2 : 1} // Center node is larger
        />
      ))}
      
      {/* Connection Lines */}
      {connections.map((connection, index) => (
        <ConnectionLine
          key={index}
          start={connection.start}
          end={connection.end}
          color={connection.color}
        />
      ))}
      
      {/* Floating Hash Strings */}
      {hashes.map((hash, index) => (
        <FloatingHash
          key={index}
          position={hash.position}
          hash={hash.hash}
        />
      ))}
      
      {/* Particle System */}
      <BlockchainParticles />
    </group>
  )
}

// CSS Fallback Component
function BlockchainFallback() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-slate-900 to-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-green/10 to-neon-purple/10 animate-pulse" />
      
      {/* Floating particles fallback */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Main 3D Background Component
export function Blockchain3D() {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Check WebGL support
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setIsWebGLSupported(false)
    }
  }, [])

  // Don't render on server
  if (!isMounted) {
    return <BlockchainFallback />
  }

  if (!isWebGLSupported) {
    return <BlockchainFallback />
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
        fallback={<BlockchainFallback />}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00D4FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#00FF88" />
        
        {/* Scene */}
        <BlockchainScene />
        
        {/* Post-processing Effects */}
        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.2} />
          <ChromaticAberration offset={[0.001, 0.001]} />
        </EffectComposer>
        
        {/* Controls (disabled for background) */}
        <OrbitControls enabled={false} />
      </Canvas>
    </div>
  )
}
