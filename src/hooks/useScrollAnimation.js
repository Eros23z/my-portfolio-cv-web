import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
            setIsVisible(false);
        }
      },
      {
        threshold: threshold, 
      }
    );
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [threshold]); 
  return [domRef, isVisible];
};

export default useScrollAnimation;