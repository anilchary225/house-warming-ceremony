import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ThirdPage = () => {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  const yagnamRef = useRef(null);
  const swamyRef = useRef(null);

  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ============================================
      // BACKGROUND TRANSITION
      // ============================================
      gsap.fromTo(
        backgroundRef.current,
        {
          opacity: 0,
          scale: 1.05,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // ============================================
      // YAGNAM IMAGE ANIMATION
      // Bottom → Top
      // ============================================
      gsap.fromTo(
        yagnamRef.current,
        {
          y: "100%",
          opacity: 0,
          scale: 0.9,
        },
        {
          y: "0%",
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );

      // ============================================
      // SATYANARAYANA SWAMY IMAGE ANIMATION
      // Bottom → Top
      // ============================================
      gsap.fromTo(
        swamyRef.current,
        {
          y: "100%",
          opacity: 0,
          scale: 0.9,
        },
        {
          y: "0%",
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 1,
          },
        }
      );

      // ============================================
      // TEXT TRANSITION
      // ============================================
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
          delay: 0.4,
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
      {/* ============================================
          BACKGROUND
      ============================================ */}
      <img
        ref={backgroundRef}
        src="/images/background2.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ============================================
          YAGNAM IMAGE
      ============================================ */}
      {/* ============================================
    SMALL IMAGES BELOW TEXT
============================================ */}
<div
  ref={swamyRef}
  className="
    absolute
    bottom-[5%]
    left-1/2
    -translate-x-1/2
    z-20
    flex
    flex-row
    items-end
    justify-center
    gap-6
    md:gap-10
    lg:gap-14
  "
>
  {/* YAGNAM */}
  <img
    src="/images/yagnam2.webp"
    alt=""
    className="
      h-44
      md:h-62
      lg:h-80
      w-auto
      object-contain
    "
  />

  {/* SATYANARAYANA SWAMY */}
  <img
    src="/images/satyanarayanswamy.webp"
    alt=""
    className="
      h-30
      md:h-48
      lg:h-66
      w-auto
      object-contain
      border-2
      md:border-3
      border-amber-400
      p-1
      rounded-full
    "
  />
</div>

      {/* ============================================
          CONTENT
      ============================================ */}
      <div
        ref={textRef}
        className="
          relative
          z-30
          flex
          h-full
          w-full
          items-top
          top-30
          justify-center
          text-center
          p-10
        "
      >
        <h1 className="font-one text-xl text-[#563906] md:text-4xl">
          శ్రీ సత్యనారాయణ స్వామి వారి అనుగ్రహంతో మా ఇంట్లో ఉదయం 4:30 గం.లకు
          పూజా కార్యక్రమం మరియు ఉదయం 10:00 గం.లకు శ్రీ సత్యనారాయణ స్వామి వ్రతం
          నిర్వహించుచున్నాము.
          <br />
          <br />
          ఈ పవిత్ర కార్యక్రమానికి మీరు మీ కుటుంబ సమేతంగా విచ్చేసి, స్వామివారి
          వ్రతంలో పాల్గొని తీర్థ ప్రసాదాలు స్వీకరించి మమ్మల్ని ఆశీర్వదించవలసిందిగా
          సాదరంగా ఆహ్వానిస్తున్నాము.
        </h1>
      </div>
    </section>
  );
};

export default ThirdPage;