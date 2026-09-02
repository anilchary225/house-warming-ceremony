import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SecondPage = () => {
  const sectionRef = useRef(null);
  const gopuramRef = useRef(null);
  const smokeRef = useRef(null);

  // Added refs for banana trees
  const rightTreeRef = useRef(null);
  const leftTreeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ============================================
      // GOPURAM ANIMATION
      // Moves from bottom to top on scroll
      // ============================================
      gsap.fromTo(
        gopuramRef.current,
        {
          y: "100%",
        },
        {
          y: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );

      // ============================================
      // RIGHT BANANA TREE ANIMATION
      // Moves from bottom to top on scroll
      // ============================================
      gsap.fromTo(
        rightTreeRef.current,
        {
          y: "100%",
        },
        {
          y: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );

      // ============================================
      // LEFT BANANA TREE ANIMATION
      // Moves from bottom to top on scroll
      // ============================================
      gsap.fromTo(
        leftTreeRef.current,
        {
          y: "100%",
        },
        {
          y: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );

      // ============================================
      // SMOKE FADE IN
      // Smoke stays at the bottom
      // ============================================
      gsap.fromTo(
        smokeRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ============================================
          BACKGROUND
      ============================================ */}
      <img
        src="/images/background3.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ============================================
          GOPURAM
          Centered + bottom aligned
      ============================================ */}
      <img
        ref={gopuramRef}
        src="/images/gopuram.webp"
        alt=""
        className="
          absolute
          bottom-[-8%]
          left-1/2
          z-20
          h-[108%]
          w-auto
          -translate-x-1/2
          object-contain

          sm:bottom-[-6%]
          sm:h-[106%]

          lg:bottom-[-4%]
          lg:h-[104%]
        "
      />

      {/* ============================================
          SMOKE
          Always stays at bottom
      ============================================ */}
      <img
        ref={smokeRef}
        src="/images/smoke1.webp"
        alt=""
        className="
          absolute
          bottom-0
          left-1/2
          z-30
          w-full
          -translate-x-1/2
          object-contain
        "
      />

      {/* ============================================
          RIGHT BANANA TREE
          Same position as your original code
      ============================================ */}
      <img
        ref={rightTreeRef}
        src="/images/bananatree2.webp"
        alt=""
        className="
          absolute
          right-0
          bottom-0
          z-30
          w-full
          lg:h-full
          md:h-1/2
          h-1/3
          -translate-x-1/2
          object-contain
          blur-sm
        "
      />

      {/* ============================================
          LEFT BANANA TREE
          Same position as your original code
      ============================================ */}
      <img
        ref={leftTreeRef}
        src="/images/bananatree2.webp"
        alt=""
        className="
          absolute
          left-0
          bottom-0
          z-30
          w-full
          h-1/3
          md:h-1/2
          lg:h-full
          translate-x-1/2
          object-contain
          blur-sm
        "
      />

      {/* ============================================
          CONTENT
      ============================================ */}
      <div
        className="
          relative
          z-18
          flex
          h-full
          w-full
          items-top
          top-50
          justify-center
          text-center
        "
      >
        <h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-[#563906] font-one">
          నూతన గృహంలో

          శుభారంభానికి శ్రీకారం చుడుతూ,
          <br />

          ఈ పవిత్ర గృహప్రవేశ మహోత్సవానికి
          <br />

          మిమ్మల్ని మరియు మీ కుటుంబ సభ్యులను

          సాదరంగా ఆహ్వానిస్తున్నాము.
        </h1>
      </div>
    </section>
  );
};

export default SecondPage;