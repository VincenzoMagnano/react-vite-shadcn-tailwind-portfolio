import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

export default function ModernNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const menuItems = ["ABOUT", "WORKS", "CONTACT"];
  const menuLinks = ["#about", "#works", "#contact"];

  // Inizializza le animazioni
  useEffect(() => {
    // Configura il contesto GSAP
    const ctx = gsap.context(() => {
      // Animazione iniziale del menu
      if (menuRef.current) {
        gsap.fromTo(
          menuRef.current,
          {
            opacity: 0,
            y: -10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          }
        );
      }

      // Animazione degli elementi del menu con stagger
      gsap.fromTo(
        itemsRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.4)",
        }
      );

      // Inizializza l'indicatore nascosto
      if (indicatorRef.current) {
        gsap.set(indicatorRef.current, {
          width: 0,
          left: "50%",
          opacity: 0,
        });
      }
    });

    return () => ctx.revert(); // Pulisci le animazioni quando il componente viene smontato
  }, []);

  // Gestisci l'hover sugli elementi del menu
  const handleMouseEnter = useCallback((index: number) => {
    if (!linkRefs.current[index] || !menuRef.current || !indicatorRef.current)
      return;

    const link = linkRefs.current[index];
    const linkRect = link.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    // Calcola la posizione relativa dell'elemento rispetto al menu
    const relativeLinkPos = linkRect.left - menuRect.left;

    // Anima l'indicatore
    gsap.to(indicatorRef.current, {
      left: relativeLinkPos + linkRect.width / 2,
      width: linkRect.width * 0.8,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // Anima il testo
    gsap.to(link, {
      color: "#000",
      fontWeight: 600,
      duration: 0.2,
      y: -2,
    });
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    if (!linkRefs.current[index]) return;

    // Ripristina lo stile del testo
    gsap.to(linkRefs.current[index], {
      color: "#4B5563",
      fontWeight: 500,
      duration: 0.2,
      y: 0,
    });
  }, []);

  // Quando il mouse esce completamente dal menu
  const handleMenuLeave = useCallback(() => {
    if (!indicatorRef.current) return;

    // Nascondi l'indicatore
    gsap.to(indicatorRef.current, {
      width: 0,
      opacity: 0,
      duration: 0.4,
    });
  }, []);

  // Animazione per il toggle del menu mobile
  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Apri il menu mobile con un'animazione più sofisticata
      gsap.set(".mobile-menu", {
        display: "flex",
        height: "auto",
      });

      const mobileMenu = document.querySelector(".mobile-menu");
      const height =
        mobileMenu instanceof HTMLElement ? mobileMenu.offsetHeight : 0;

      gsap.fromTo(
        ".mobile-menu",
        {
          height: 0,
          opacity: 0,
          y: -20,
        },
        {
          height,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }
      );

      // Anima gli elementi del menu mobile
      gsap.fromTo(
        ".mobile-menu li",
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    } else {
      // Chiudi il menu con animazione
      gsap.to(".mobile-menu", {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(".mobile-menu", { display: "none" });
        },
      });
    }

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      ref={navRef}
      className="w-full flex justify-between items-center py-4 px-6 bg-transparent"
    >
      {/* Logo o Brand */}
      <div className="text-xl font-bold text-gray-800"></div>

      {/* Desktop Navigation */}
      <div
        ref={menuRef}
        className="hidden md:block"
        onMouseLeave={handleMenuLeave}
      >
        <ul className="flex items-center gap-8 relative">
          {/* Indicatore di hover */}
          <div
            ref={indicatorRef}
            className="absolute h-0.5 bg-black rounded-full -bottom-2 transform -translate-x-1/2"
          ></div>

          {menuItems.map((item, index) => (
            <li
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className="relative"
            >
              <a
                href={menuLinks[index]}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                className="text-xl font-medium text-gray-700 transition-colors"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${
            isMenuOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-out ${
            isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className="mobile-menu md:hidden fixed top-16 right-4 left-4 bg-white rounded-lg shadow-lg flex-col overflow-hidden z-40 mt-3.5"
        style={{ display: "none", height: 0 }}
      >
        <ul className="py-2 px-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="py-3 border-b border-gray-100 last:border-0"
            >
              <a
                href={menuLinks[index]}
                className="block text-gray-800 hover:text-black font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
