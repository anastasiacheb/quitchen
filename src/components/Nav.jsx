import { useState } from 'react';
import { Link } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="overflow-auto">
      <div className="bg-dark p-2 rounded-xl flex gap-3 items-center w-fit absolute left-1/2 transform -translate-x-1/2 top-4 md:top-8  xl:left-18 xl:translate-x-0 xl:top-18 z-20 min-w-70 md:w-109 xl:fixed">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="open menu"
          className="flex flex-col gap-1.25 bg-secondary size-10.25 items-center justify-center rounded-lg border border-tertiary hover:bg-hover group flex-none">
          <div className="bg-light w-5 h-0.25 group-hover:translate-y-1.5 transition-all ease-linear duration-200"></div>
          <div className="bg-light w-5 h-0.25"></div>
          <div className="bg-light w-5 h-0.25 group-hover:-translate-y-1.5 transition-all ease-linear duration-200"></div>
        </button>
        <Link to="/" className="w-fit">
          <img src="assets/icons/Logo.svg" alt="logo" className="h-6 w-auto md:h-7.5 flex-none" />
        </Link>
        <div className="flex items-center justify-center gap-1">
          <Link
            to="/menu"
            className="font-satoshi font-light uppercase text-xs p-3 hidden md:block border border-transparent hover:border-tertiary hover:bg-secondary rounded-lg tracking-wider h-10">
            Menu
          </Link>
          <Link
            to="/about"
            className="font-satoshi font-light uppercase text-xs p-3 hidden md:block tracking-wider h-10 border border-transparent hover:border-tertiary hover:bg-secondary rounded-lg">
            About
          </Link>
          <Link
            to="/reservation"
            className="font-satoshi flex-none font-light uppercase text-xs p-3 border border-tertiary rounded-lg bg-secondary hover:bg-hover h-10">
            Book a Table
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`absolute xl:fixed top-0 bg-dark bg-[url('../assets/images/bg.webp')] bg-cover bg-center bg-no-repeat overflow-x-clip bg-fixed w-dvw h-dvh left-0 p-3 md:p-6 z-30 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="border border-tertiary rounded-2xl h-full">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="open menu"
                className="flex flex-col gap-1.25 bg-secondary size-10.25 items-center justify-center rounded-lg border border-tertiary hover:bg-hover group absolute top-6 right-6 md:top-15 md:right-0 md:left-15">
                <div className="bg-light w-5 h-0.25 rotate-45 translate-y-0.75 group-hover:rotate-0 transition-all ease-linear duration-200"></div>
                <div className="bg-light w-5 h-0.25 -rotate-45 -translate-y-0.75 group-hover:rotate-0 transition-all ease-linear duration-200"></div>
              </button>
              <div className="flex flex-col gap-4 items-center h-full justify-center">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/menu"
                  href="#"
                  className="text-3xl md:text-5xl xl:text-[64px] font-forum leading-none uppercase hover:text-hoverlink">
                  Menu
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/reservation"
                  className="text-3xl md:text-5xl xl:text-[64px] font-forum leading-none uppercase hover:text-hoverlink">
                  REservation
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/about"
                  className="text-3xl md:text-5xl xl:text-[64px] font-forum leading-none uppercase hover:text-hoverlink">
                  About
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/contact"
                  className="text-3xl md:text-5xl xl:text-[64px] font-forum leading-none uppercase hover:text-hoverlink">
                  Contact
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/blog"
                  className="text-3xl md:text-5xl xl:text-[64px] font-forum leading-none uppercase hover:text-hoverlink">
                  Blog
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
