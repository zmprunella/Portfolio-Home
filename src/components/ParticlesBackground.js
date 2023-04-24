import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../particles.json";

const ParticlesBackground = () => {
  const initParticles = useCallback((tsParticles) => {
    (async () => {
      await loadFull(tsParticles);
    })();
  }, []);

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles1"
        className="particles"
        options={particlesConfig}
        init={initParticles}
      />
    </div>
  );
};

export default ParticlesBackground;
