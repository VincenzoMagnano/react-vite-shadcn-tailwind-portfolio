import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import BackgroundSVG from "../background/BackgroundSVG";
import HeroWorkButton from "../layout/HeroWorkButton";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      }).from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 2,
          ease: "power4.out",
        },
        "-=0.5"
      );
      // Button animation is now managed by the HeroWorkButton component
    }, heroRef);

    const chars = heroRef.current?.querySelectorAll(".title-char");

    // Create proper event handlers to avoid memory leaks
    const handleMouseEnter = (char: Element) => {
      gsap.to(char, {
        scale: 1.5,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (char: Element) => {
      gsap.to(char, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    chars?.forEach((char) => {
      const enterFn = () => handleMouseEnter(char);
      const leaveFn = () => handleMouseLeave(char);

      // Store the function references directly on the element for cleanup
      (char as any)._enterFn = enterFn;
      (char as any)._leaveFn = leaveFn;

      char.addEventListener("mouseenter", enterFn);
      char.addEventListener("mouseleave", leaveFn);
    });

    return () => {
      ctx.revert();
      chars?.forEach((char) => {
        // Use the stored references for proper removal
        char.removeEventListener("mouseenter", (char as any)._enterFn);
        char.removeEventListener("mouseleave", (char as any)._leaveFn);
      });
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 relative"
    >
      <BackgroundSVG type="wavy" />
      <div className="w-full flex flex-col justify-center items-center p-6 md:p-12 lg:p-16">
        <div id="title-container" className="flex flex-col items-center">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-4xl md:text-8xl font-extrabold text-gray-800 leading-tight text-center"
          >
            {"VINCENZO ".split("").map((char, index) => (
              <span
                key={`vincenzo-${index}`}
                className="title-char inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}

            {"MAGNANO ".split("").map((char, index) => (
              <span
                key={`magnano-${index}`}
                className="title-char inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <br />
            {"DEVELOPER ".split("").map((char, index) => (
              <span
                key={`developer-${index}`}
                className="title-char inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-8 font-semibold"
          >
            Build digital solutions with mind, heart and code.
          </p>
          <HeroWorkButton />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
