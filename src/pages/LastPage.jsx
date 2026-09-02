import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LastPage = () => {
  const sectionRef = useRef(null);

  const leftTreeRef = useRef(null);
  const rightTreeRef = useRef(null);

  const leftFlowersRef = useRef(null);
  const rightFlowersRef = useRef(null);

  const leftLotusRef = useRef(null);
  const rightLotusRef = useRef(null);

  const cowRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ================= LEFT TREE =================
      gsap.fromTo(
        leftTreeRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ================= RIGHT TREE =================
      gsap.fromTo(
        rightTreeRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ================= LEFT FLOWERS =================
      gsap.fromTo(
        leftFlowersRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ================= RIGHT FLOWERS =================
      gsap.fromTo(
        rightFlowersRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ================= LEFT LOTUS =================
      gsap.fromTo(
        leftLotusRef.current,
        {
          opacity: 0,
          y: 70,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ================= RIGHT LOTUS =================
      gsap.fromTo(
        rightLotusRef.current,
        {
          opacity: 0,
          y: 70,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.6,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ================= CENTER IMAGE =================
      gsap.fromTo(
        cowRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          delay: 0.7,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ================= TEXT =================
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
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

      {/* ================= BACKGROUND ================= */}
      <img
        src="/images/background3.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ================= LAYER 1 — BANANA TREES ================= */}

      {/* Left Tree */}
      <img
        ref={leftTreeRef}
        src="/images/bananatree.webp"
        alt=""
        className="
          absolute
          bottom-0
          left-0
          z-10
          w-auto
          object-contain
          h-[20%]
          md:h-[25%]
          lg:h-[50%]
        "
      />

      {/* Right Tree */}
      <img
        ref={rightTreeRef}
        src="/images/bananatree.webp"
        alt=""
        className="
          absolute
          bottom-0
          right-0
          z-10
          w-auto
          scale-x-[-1]
          object-contain
          h-[20%]
          md:h-[25%]
          lg:h-[50%]
        "
      />

      {/* ================= LAYER 2 — FLOWERS ================= */}

      {/* Left Flowers */}
      <img
        ref={leftFlowersRef}
        src="/images/flowers.webp"
        alt=""
        className="
          absolute
          bottom-0
          left-[3%]
          z-9
          w-auto
          object-contain
          h-[10%]
          md:h-[15%]
          lg:h-[30%]
        "
      />

      {/* Right Flowers */}
      <img
        ref={rightFlowersRef}
        src="/images/flowers.webp"
        alt=""
        className="
          absolute
          bottom-0
          right-[3%]
          z-9
          w-auto
          scale-x-[-1]
          object-contain
          h-[10%]
          md:h-[15%]
          lg:h-[30%]
        "
      />

      {/* ================= LAYER 3 — LOTUS ================= */}

      {/* Left Lotus */}
      <img
        ref={leftLotusRef}
        src="/images/lotus.webp"
        alt=""
        className="
          absolute
          bottom-0
          left-[20%]
          z-30
          w-auto
          object-contain
          h-[14%]
          md:h-[18%]
          lg:h-[22%]
        "
      />

      {/* Right Lotus */}
      <img
        ref={rightLotusRef}
        src="/images/lotus.webp"
        alt=""
        className="
          absolute
          bottom-0
          right-[20%]
          z-30
          w-auto
          object-contain
          h-[14%]
          md:h-[18%]
          lg:h-[22%]
        "
      />

      {/* ================= CENTER — COW ================= */}

      <img
        ref={cowRef}
        src="/images/welcome.webp"
        alt=""
        className="
          absolute
          bottom-[15%]
          left-1/2
          z-40
          h-[30%]
          w-auto
          -translate-x-1/2
          -translate-y-70
          object-contain
          sm:h-[34%]
          md:h-[38%]
          lg:h-[43%]
        "
      />

      {/* ================= TEXT ================= */}

      <div
        ref={textRef}
        className="
          relative
          z-19
          flex
          h-full
          w-full
          items-top
          top-40
          justify-center
          text-center
        "
      >
        <h1 className="font-one text-2xl  text-[#563906]  md:text-6xl">
          "మా గృహమునకు విచ్చేసి <br />

          మా ఆతిథ్యం స్వీకరించగలరని మనవి."
        </h1>
      </div>

    </section>
  );
};

export default LastPage;