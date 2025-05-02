/* import gsap from "gsap"; */
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
/* import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"; */


const Home = () => {
  /* const heroRef = useRef<HTMLElement | null>(null); */
 

  /* gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!heroRef.current) return;

    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      markers: false,
    },
    
);
  }, []); */
  return (
    <>
    
      <div className="relative ">
        <section className="relative z-[10] bg-white" /* ref={heroRef} */>
          <HeroSection />
        </section>
        <section className="relative z-[20] " >
          <IntroSection />
        </section>
      </div>
    </>
  );
};

export default Home;
