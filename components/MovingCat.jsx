import React, { useEffect, useRef, useCallback } from 'react';
import styles from './MovingCat.module.css';

function getRandomVelocity(maxSpeed) {
  return (Math.random() - 0.5) * maxSpeed;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

export default function MovingCat({
  imageSrc = '/images/main_cat.gif',
  soundSrc = '/sounds/meow.mp3',
  width = 80,
  height = 80,
  maxSpeed = 10,
  speedVariation = 0.05,
  speedBoost = 15,
  style = {},
}) {
  const catRef = useRef(null);
  const soundRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0, dx: 0, dy: 0, initialized: false });

  const handleClick = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.play();
    }
  }, []);

  useEffect(() => {
    const catEl = catRef.current;
    if (!catEl) return;
    if (!positionRef.current.initialized) {
      positionRef.current.x  = Math.random() * (window.innerWidth  - width);
      positionRef.current.y  = Math.random() * (window.innerHeight - height);
      positionRef.current.dx = getRandomVelocity(maxSpeed);
      positionRef.current.dy = getRandomVelocity(maxSpeed);
      positionRef.current.initialized = true;
    }

    catEl.addEventListener('click', handleClick);

    const animate = () => {
      const pos = positionRef.current;

      if (Math.random() < speedVariation) {
        pos.dx = getRandomVelocity(speedBoost);
        pos.dy = getRandomVelocity(speedBoost);
      }

      pos.x += pos.dx;
      pos.y += pos.dy;

      pos.x = clamp(pos.x, 0, window.innerWidth  - width);
      pos.y = clamp(pos.y, 0, window.innerHeight - height);

      catEl.style.transform = `translate(${pos.x}px, ${pos.y}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      catEl.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationRef.current);
    };
  }, [
    handleClick,
    width,
    height,
    maxSpeed,
    speedVariation,
    speedBoost,
  ]);

  return (
    <>
      <img
        ref={catRef}
        src={imageSrc}
        alt="Moving Cat"
        className={styles.cat}
        style={{
          width:  `${width}px`,
          height: `${height}px`,
          ...style,
        }}
        draggable={false}
      />
      <audio ref={soundRef} src={soundSrc} preload="auto" />
    </>
  );
}
