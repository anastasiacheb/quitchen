import { Link } from 'react-router';

const HOME_LINKS = [
  {
    to: '/menu',
    text: 'Menu',
    img: 'Image1.webp',
  },
  {
    to: '/reservation',
    text: 'Reservation',
    img: 'Image2.webp',
  },
  {
    to: '/about',
    text: 'Our Restaurant',
    img: 'Image3.webp',
  },
];

function HomeLink({ to, text, img }) {
  return (
    <Link
      to={to}
      className="group cursor-pointer rounded-2xl relative block lg:flex-1 lg:h-[calc((100dvh-48px-32px)/3)]">
      <img
        className="w-full opacity-70 group-hover:opacity-100 transition-opacity duration-200 ease-linear rounded-2xl lg:shrink h-full object-cover"
        src={`assets/images/${img}`}
        alt="photo"
      />
      <div className="pt-3 pb-0 pl-6 bg-dark rounded-tl-3xl gap-2 flex absolute bottom-0 right-0 items-center">
        <p className="uppercase font-forum text-base">{text}</p>
        <div className="size-9 bg-secondary border border-tertiary rounded-full flex items-center justify-center group-hover:bg-hover overflow-hidden relative">
          <img
            src="assets/icons/ph_arrow-right-light.svg"
            alt="arrow"
            className="size-4.5 max-w-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-full transition-all duration-200 ease-linear"
          />
          <img
            src="assets/icons/ph_arrow-right-light.svg"
            alt="arrow"
            className="size-4.5 max-w-none absolute -left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  group-hover:left-1/2 transition-all duration-200 ease-linear"
          />
        </div>
        <img src="assets/icons/Rounded_Edge.svg" alt="decor" className="absolute top-0 right-0 -translate-y-full" />
        <img src="assets/icons/Rounded_Edge.svg" alt="decor" className="absolute bottom-0 left-0 -translate-x-full" />
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="p-3 md:p-6 text-light flex flex-col gap-4 md:h-dvh lg:flex-row lg:h-dvh">
      <div className="size-[calc(100dvw-24px)] bg-[url('/quitchen/assets/images/pexels-cottonbro-3296546.webp')] bg-cover bg-center bg-no-repeat rounded-2xl flex items-end relative z-10 overflow-hidden justify-between lg:size-full lg:h-[calc(100dvh-48px)]">
        <img src="assets/images/Gradient.webp" alt="gradient" className="absolute bottom-0 w-full h-1/2 object-fill" />
        <h1 className="font-forum text-light text-[56px] md:text-8xl lg:text-[140px] tracking-wider uppercase leading-none pb-4 text-center mx-auto lg:text-left lg:mx-0 relative z-10 lg:pl-19 lg:pb-14">
          Sushi <br />
          Sensation
        </h1>
        <div className="pt-6 pb-4 pl-6 pr-4 bg-dark rounded-tl-3xl gap-2 hidden md:flex absolute bottom-0 right-0">
          <a
            href="#"
            className="size-9 bg-secondary border border-tertiary rounded-full flex items-center justify-center hover:bg-hover">
            <img src="assets/icons/ph_instagram-logo-light.svg" alt="inst" className="size-4.5 max-w-none" />
          </a>
          <a
            href="#"
            className="size-9 bg-secondary border border-tertiary rounded-full flex items-center justify-center hover:bg-hover">
            <img src="assets/icons/ph_facebook-logo-light.svg" alt="facebook" className="size-4.5 max-w-none" />
          </a>
          <a
            href="#"
            className="size-9 bg-secondary border border-tertiary rounded-full flex items-center justify-center hover:bg-hover">
            <img src="assets/icons/ph_twitter-logo-light.svg" alt="twitter" className="size-4.5 max-w-none" />
          </a>
          <img src="assets/icons/Rounded_Edge.svg" alt="decor" className="absolute top-0 right-0 -translate-y-full" />
          <img src="assets/icons/Rounded_Edge.svg" alt="decor" className="absolute bottom-0 left-0 -translate-x-full" />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row lg:flex-1/4 lg:flex-col lg:min-w-90 lg:h-[calc(100dvh-48px)] xl:min-w-105">
        {HOME_LINKS.map((link) => (
          <HomeLink key={link.to} to={link.to} text={link.text} img={link.img} />
        ))}
      </div>
    </main>
  );
}
