import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    let removeMetadataListener;
    let ctx = gsap.context(() => {
      const setupScrollVideo = () => {
        if (!Number.isFinite(video.duration) || video.duration <= 0) return;

        // Video starts at first frame
        video.currentTime = 0;

        gsap.to(video, {
          currentTime: video.duration,

          ease: "none",

          scrollTrigger: {
            trigger: section,

            start: "top top",
            end: "+=3000",

            scrub: true,

            pin: true,

            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      };

      // Metadata must be loaded before using duration
      if (video.readyState >= 1) {
        setupScrollVideo();
      } else {
        video.addEventListener("loadedmetadata", setupScrollVideo);
        removeMetadataListener = () =>
          video.removeEventListener("loadedmetadata", setupScrollVideo);
      }
    }, section);

    return () => {
      removeMetadataListener?.();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        src="/videos/house.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Optional overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </section>
  );
};

export default ScrollVideo;
