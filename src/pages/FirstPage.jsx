import { useEffect, useRef } from "react";
import gsap from "gsap";

const FirstPage = () => {
  const textRef = useRef(null);
  const titleRef = useRef(null);

  const ganeshRef = useRef(null);
  const leftThombRef = useRef(null);
  const rightThombRef = useRef(null);
  const thoranamRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Thoranam - top to bottom + fade in
    tl.fromTo(
      thoranamRef.current,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // 2. Left Thomb - left to right
    tl.fromTo(
      leftThombRef.current,
      {
        opacity: 0,
        x: -150,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.7"
    );

    // 3. Right Thomb - right to left
    tl.fromTo(
      rightThombRef.current,
      {
        opacity: 0,
        x: 150,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=1"
    );

    // 4. Ganesh - fade in
    tl.fromTo(
      ganeshRef.current,
      {
        opacity: 0,
        scale: 0.85,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=0.6"
    );

    // 5. Small text
    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.8"
    );

    // 6. Main title
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
      },
      "-=0.5"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}
      <img
        src="/images/background.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Everything above background */}
      <div className="relative z-10 h-full w-full">

        {/* Text */}
        <div className="absolute inset-0 top-70 flex flex-col items-center justify-center text-center text-white md:top-100">

          {/* Small Heading */}
          <h1
            ref={textRef}
            className="mb-4 font-one text-sm font-bold uppercase tracking-[0.3em] text-[#9b670c] md:text-2xl"
          >
            ॥ శ్రీ గణేశాయ నమః ॥
          </h1>

          {/* Main Heading */}
          <h1
            ref={titleRef}
            className="text-xl font-one font-bold leading-tight text-[#563906] md:text-6xl"
          >
            దేవోజీ వారి
            <br />
            గృహప్రవేశ ఆహ్వానం
          </h1>

        </div>

        {/* RIGHT THOMB */}
        <img
          ref={rightThombRef}
          src="/images/thomb.webp"
          alt=""
          className="absolute -right-20 z-21 h-full min-h-screen object-cover md:-right-30 lg:right-0"
        />

        {/* LEFT THOMB */}
        <img
          ref={leftThombRef}
          src="/images/thomb.webp"
          alt=""
          className="absolute -left-20 z-21 h-full min-h-screen scale-x-[-1] object-cover md:-left-30 lg:left-0"
        />

        {/* THORANAM */}
        <img
          ref={thoranamRef}
          src="/images/thoranam.webp"
          alt=""
          className="absolute top-0 z-20 w-full object-cover"
        />

        {/* GANESH */}
        <img
          ref={ganeshRef}
          src="/images/ganesh.webp"
          alt=""
          className="absolute left-1/2 top-50 z-20 w-40 -translate-x-1/2 object-contain md:top-50 md:w-72 lg:top-40"
        />

      </div>
    </section>
  );
};

export default FirstPage;