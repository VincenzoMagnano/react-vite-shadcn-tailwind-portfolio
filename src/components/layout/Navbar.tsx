import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLayoutEffect(() => {
    const el = navRef.current;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "+=1",
        toggleClass: { targets: el, className: "nav-scrolled" },
        scrub: false,
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur shadow-md border-b "
          : "bg-transparent "
      }`}
    >
      <nav
        className={`flex items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-6"
        }`}
      >
        <div className="text-xl font-bold hover:opacity-80 transition ml-3">
          <a href="#home">VMD</a>
        </div>
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 bg-gray-400 p-5 rounded-3xl flex flex-center ">
          <li>
            <a href="#about" className="hover:text-black transition">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#works" className="hover:text-black transition">
              WORKS
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black transition">
              CONTACT
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 shadow-md z-40">
          <ul className="flex flex-col items-center gap-4 p-4 text-sm font-medium text-gray-700">
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#works" onClick={() => setIsMenuOpen(false)}>
                WORKS
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
