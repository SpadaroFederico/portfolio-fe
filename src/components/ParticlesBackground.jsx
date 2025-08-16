// src/components/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    background: {
      color: { value: "transparent" }, // se vuoi che si veda il body
      image: "linear-gradient(to bottom, #1a237e, #4a148c, #000)", // qui il tuo gradiente
    },
    fpsLimit: 60,
    particles: {
      color: { value: "#ffffff" },
      move: { enable: true, speed: 0.3 },
      number: { value: 300, density: { enable: true, area: 800 } },
      size: { value: 1, random: true },
      opacity: { value: 1, random: true },
    },
  }}
/>
  );
}
