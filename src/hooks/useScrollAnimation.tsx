import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const section = entry.target as HTMLElement;
          const sectionId = section.id;
          
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
            section.classList.add('section-visible');
            section.classList.remove('section-hidden');
          } else {
            section.classList.add('section-hidden');
            section.classList.remove('section-visible');
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { activeSection };
};