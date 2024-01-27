import { useRef, useState, useEffect } from "react";
export const LazyBackgroundSection = ({ imageUrl, children }) => {
  const sectionRef = useRef();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const sectionStyle = {
    backgroundImage: isIntersecting ? `url(${imageUrl})` : "none",
  };

  return (
    <section ref={sectionRef} style={sectionStyle}>
      <div>{children}</div>
    </section>
  );
};
