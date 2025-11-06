import Page from '../components/Page';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useEffect } from 'react';

function Slider({ images, navId, startDelay = 0 }) {
  const swiperRef = useRef(null);

  const nextClass = `.swiper-button-next${navId}`;
  const prevClass = `.swiper-button-prev${navId}`;

  useEffect(() => {
    if (startDelay > 0 && swiperRef.current?.autoplay) {
      const timer = setTimeout(() => {
        swiperRef.current.autoplay.start();
      }, startDelay);
      return () => clearTimeout(timer);
    }
  }, [startDelay]);

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      slidesPerView={1}
      loop={true}
      speed={1000}
      autoplay={{ delay: 3000 }}
      navigation={{ nextEl: nextClass, prevEl: prevClass }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        if (startDelay > 0) swiper.autoplay.stop();
      }}
      className="rounded-2xl xl:h-[calc((100dvh-62px-150px-32px-48px-16px)/2)]">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={`assets/images/${image}`}
            alt="photo"
            className="aspect-[456/377] rounded-2xl object-cover xl:aspect-auto xl:h-full xl:w-full"
          />
        </SwiperSlide>
      ))}
      <button
        className={`swiper-button-prev${navId} absolute left-2 top-1/2 z-10 -translate-y-1/2 size-9 bg-secondary border border-tertiary rounded-full flex items-center justify-center hover:bg-hover`}>
        <img src="assets/icons/ph_arrow-right-light.svg" alt="arrow" className="size-4.5 max-w-none rotate-180" />
      </button>
      <button
        className={`swiper-button-next${navId} absolute right-2 top-1/2 z-10 -translate-y-1/2 size-9 bg-secondary border border-tertiary rounded-full flex items-center justify-center hover:bg-hover`}>
        <img src="assets/icons/ph_arrow-right-light.svg" alt="arrow" className="size-4.5 max-w-none" />
      </button>
    </Swiper>
  );
}

function Critics({ title, text }) {
  return (
    <div className="rounded-2xl border border-tertiary p-8 text-center">
      <div className="flex gap-1 py-2 justify-center pb-2">
        <img src="assets/icons/Vector.svg" alt="star" className="size-4" />
        <img src="assets/icons/Vector.svg" alt="star" className="size-4" />
        <img src="assets/icons/Vector.svg" alt="star" className="size-4" />
        <img src="assets/icons/Vector.svg" alt="star" className="size-4" />
        <img src="assets/icons/Vector.svg" alt="star" className="size-4" />
      </div>
      <h3 className="uppercase font-forum font-normal text-2xl pb-1">{title}</h3>
      <p className="uppercase font-satoshi font-normal text-xs opacity-70">{text}</p>
    </div>
  );
}

export default function About() {
  const firstSliderImages = ['Image2.webp', 'jFLjtiNrSbyMi9cGMowrM7Pc7Bg.webp', 'Image7.webp'];
  const secondSliderImages = [
    'Image8.webp',
    'pexels-cottonbro-studio-3296539 1.webp',
    'eN3OMUIE7k3yknjR7LKFRc8TlU.webp',
  ];

  const CRITICS = [
    {
      title: 'Trip Advisor',
      text: 'BEST SUSHI',
    },
    {
      title: 'MICHELIN GUIDE',
      text: 'QUALITY FOOD',
    },
    {
      title: 'START DINING',
      text: 'COOL VIBE',
    },
  ];

  return (
    <Page title="About" image="Image6.webp">
      <div className="flex flex-col gap-4 xl:h-full">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 xl:h-[calc((100dvh-62px-150px-32px-48px-16px)/2)]">
          <div className="rounded-2xl border border-tertiary p-10 md:p-12 flex flex-col gap-4 md:justify-between">
            <h2 className="font-forum font-normal text-[28px] md:text-[32px] uppercase leading-[120%]">
              Sushi Artistry <br />
              Redefined
            </h2>
            <p className="text-base font-satoshi font-light">
              Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to
              elevate your dining experience.
            </p>
          </div>
          <div>
            <Slider images={firstSliderImages} navId="1" />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
          {CRITICS.map((critic, index) => (
            <Critics key={index} title={critic.title} text={critic.text} />
          ))}
        </div>
        <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2 xl:h-[calc((100dvh-62px-150px-32px-48px-16px)/2)]">
          <div className="h-full">
            <Slider images={secondSliderImages} navId="2" startDelay={1500} />
          </div>
          <div className="rounded-2xl border border-tertiary p-10 md:p-12 flex flex-col gap-4 md:justify-between">
            <div className="flex gap-4 w-fit mx-auto">
              <img src="assets/icons/Grid.svg" alt="decor" className="w-15" />
              <h2 className="font-forum text-[24px] uppercase whitespace-nowrap">Our Story</h2>
              <img src="assets/icons/Grid.svg" alt="decor" className="w-15 rotate-180" />
            </div>
            <p className="text-base font-satoshi font-light">
              Founded with a passion for culinary excellence, Qitchen's journey began in the heart of Prague. Over
              years, it evolved into a haven for sushi enthusiasts, celebrated for its artful mastery and devotion to
              redefining gastronomy.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
