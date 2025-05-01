import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { SplashCursor } from "../ui/splash-cursor";

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 2,
            ease: "power4.out",
          },
          "-=0.5"
        )
        .fromTo(
          buttonRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 md:pt-32 min-h-screen bg-gray-200"
      >
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-extrabold text-gray-900"
        >
          Build digital solutions with mind, heart and code.
        </h1>
        <p ref={subtitleRef} className="text-xl mt-4 text-gray-600 max-w-2xl">
          Passionate about crafting clean, functional and impactful user
          experiences.
        </p>
        <button
          ref={buttonRef}
          className="mt-8 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          WORKS
        </button>
      </section>
        <SplashCursor />
    </>
  );
};

export default HeroSection;
