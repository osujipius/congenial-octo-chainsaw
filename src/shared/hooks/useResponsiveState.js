'use client'

import { useState, useEffect } from 'react'

export const useResponsiveState = () => {
  // Safe default values assuming all conditions false.
  const [responsiveState, setResponsiveState] = useState({
    isSmall: false,
    isSmallLandscape: false,
    isTiny: false,
    isTinyLandscape: false,
    isTouchDevice: false,
  });

  useEffect(() => {
    const getState = () => ({
      isSmall: window.innerWidth <= 768,
      isSmallLandscape:
        window.innerWidth <= 768 && window.matchMedia('(orientation: landscape)').matches,
      isTiny: window.innerWidth <= 480,
      isTinyLandscape:
        window.innerWidth <= 480 && window.matchMedia('(orientation: landscape)').matches,
      isTouchDevice: window.matchMedia('(hover: none)').matches,
    });
    
    // Initial update after the window exists.
    setResponsiveState(getState());

    let animationFrameId;
    const handleResize = () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setResponsiveState(getState());
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return responsiveState;
};