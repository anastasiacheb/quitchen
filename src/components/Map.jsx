import { useEffect, useRef } from 'react';

export default function Map() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          container.innerHTML = `
            <iframe
              class="w-full h-full border-0 rounded-[10px]"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A22a1065f2789a6068cb07bdd9af5bc1ceea2fdda967b581733eaa320a707a668&amp;source=constructor"
              title="Карта"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
              style="filter: invert(1) hue-rotate(180deg) brightness(1) contrast(0.8);"
            ></iframe>
          `;
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} id="map-container" className="w-full h-full bg-[#0a0b0a] rounded-[10px] overflow-hidden">
      {/* можно добавить прелоадер или текст */}
      <div className="flex items-center justify-center h-full text-light/60 text-sm">Загрузка карты...</div>
    </div>
  );
}
