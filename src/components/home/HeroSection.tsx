import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import BackgroundSVG from "../background/BackgroundSVG";
import AnimatedCode from "../background/AnimatedCode";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
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
            duration: 0.6,
            ease: "power4.out",
          },
          "-=0.5"
        );
    }, heroRef);
    const chars = heroRef.current?.querySelectorAll(".title-char");

    chars?.forEach((char) => {
      char.addEventListener("mouseenter", () => {
        gsap.to(char, {
          scale: 1.5,
          duration: 0.2,
          ease: "power2.out",
        });
      });

      char.addEventListener("mouseleave", () => {
        gsap.to(char, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ctx.revert();
      chars?.forEach((char) => {
        char.removeEventListener("mouseenter", () => {});
        char.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <section
        id="home"
        ref={heroRef}
        className="min-h-screen w-full flex flex-col lg:flex-row items-stretch overflow-hidden pt-20 relative"
      >
        <BackgroundSVG type="wavy" />
        <div className="w-full md:w-3/5 flex flex-col md:flex-row justify-center items-center p-6 md:p-12 lg:p-16">
          <div id="title-container" className="flex flex-col items-center md:items-start">
            <h1
              ref={titleRef}
              className="text-4xl sm:text-4xl md:text-8xl  font-extrabold text-gray-800 leading-tight"
            >
              {"<VINCENZO> </MAGNANO> /DEVELOPER/ <VINCENZO> </MAGNANO> /DEVELOPER/".split("").map((char, index) => (
                <span key={index} className="title-char inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
             
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-8"
            >
              Build digital solutions with mind, heart and code.
            </p>
            <button
              ref={buttonRef}
              className="mt-8 px-8 py-4 bg-gray-700 text-white rounded-full hover:bg-gray-500 transition text-3xl w-40"
            >
              WORKS
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12  lg:p-16 z-10 flex-col md:flex-row">
          <div className="p-3 rounded-xl backdrop-blur-sm bg-transparent border">
            <AnimatedCode
              lines={["function hello() {", '  console.log("Hello!")', "}",' hello()'," "]}
              delay={1}
              speed={0.08}
              textColor="text-gray-800"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
