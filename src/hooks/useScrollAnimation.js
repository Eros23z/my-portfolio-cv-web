import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current; 

    if (currentRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
          }
            else {
                setIsVisible(false);
            }
        },
        {
          threshold: threshold,
          rootMargin: '550px 0px 200px 0px'
        }
      );

      observer.observe(currentRef);

      return () => {
        if (currentRef) { 
          observer.unobserve(currentRef);
        }
      };
    }
  }, [threshold]); 

  return [domRef, isVisible];
};

export default useScrollAnimation;