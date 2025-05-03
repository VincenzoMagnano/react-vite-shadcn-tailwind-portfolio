import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedNavbar from "./AnimatedNavbar";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

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
          ? "bg-transparent backdrop-blur shadow-md border-b "
          : "bg-transparent "
      }`}
    >
      <nav
        className={`flex items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-6"
        }`}
      >
       <div className="text-2xl md:text-4xl font-bold hover:opacity-80 transition ml-3">
          <a href="#home">VMD</a>
        </div>
      
         <AnimatedNavbar />
      </nav>
  
     
    </header>
  );
};

export default Navbar;
