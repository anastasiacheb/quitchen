import Footer from './Footer';

export default function Page({ children, title, image, sticky = false }) {
  return (
    <main className="p-3 md:p-6 text-light flex flex-col gap-4 xl:grid xl:grid-cols-2">
      <div
        style={{ backgroundImage: `url('assets/images/${image}')` }}
        className={`h-[calc(100dvw-24px)] bg-[url('assets/images/${image}')] bg-cover bg-center bg-no-repeat rounded-2xl flex items-end relative z-10 overflow-hidden justify-between  md:h-[calc(80dvw-48px)] xl:size-full xl:h-[calc(100dvh-48px)] xl:sticky xl:align-self-start xl:top-6`}>
        <img src="assets/images/Gradient.png" alt="gradient" className="absolute bottom-0 w-full h-1/2 object-fill" />
        <h1 className="font-forum text-light text-[56px] md:text-[80px] xl:text-[112px] tracking-wider uppercase leading-none pb-4 text-center mx-auto xl:text-left xl:mx-0 relative z-10 xl:pl-16 xl:pb-14">
          {title}
        </h1>
      </div>
      <div className={`flex flex-col gap-4 ${sticky ? 'xl:h-full' : 'xl:h-[calc(100dvh-48px)]'} `}>
        {children}
        <Footer />
      </div>
    </main>
  );
}
