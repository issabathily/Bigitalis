import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavigationProgress() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Démarrer la barre de progression lors du changement de route
    setIsLoading(true);
    setProgress(0);

    // Simuler le chargement progressif
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsLoading(false);
            setProgress(0);
          }, 200);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
    };
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div 
        className="h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-out"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
}
