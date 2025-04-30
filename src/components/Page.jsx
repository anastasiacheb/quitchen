import Footer from './Footer';

export default function Page({ children, title, image, sticky = false }) {
  return (
    <main className="p-3 md:p-6 text-light flex flex-col gap-4 lg:grid lg:grid-cols-2">
      <div
        style={{ backgroundImage: `url('/assets/images/${image}')` }}
        className={`h-[calc(100dvw-24px)] bg-[url('/assets/images/${image}')] bg-cover bg-center bg-no-repeat rounded-2xl flex items-end relative z-10 overflow-hidden justify-between  md:h-[calc(80dvw-48px)] lg:size-full lg:h-[calc(100dvh-48px)] lg:sticky lg:align-self-start lg:top-6`}>
        <img src="assets/images/Gradient.webp" alt="gradient" className="absolute bottom-0 w-full h-1/2 object-fill" />
        <h1 className="font-forum text-light text-[56px] md:text-[80px] lg:text-[112px] tracking-wider uppercase leading-none pb-4 text-center mx-auto lg:text-left lg:mx-0 relative z-10 lg:pl-16 lg:pb-14">
          {title}
        </h1>
      </div>
      <div className={`flex flex-col gap-4 ${sticky ? 'lg:h-full' : 'lg:h-[calc(100dvh-48px)]'} `}>
        {children}
        <Footer />
      </div>
    </main>
  );
}
