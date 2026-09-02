
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideoPage = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let removeMetadataListener;
    let frameRequest = 0;

    const context = gsap.context(() => {
      let initialized = false;
      let requestedTime = 0;
      let appliedTime = -1;

      const initVideo = () => {
        if (
          initialized ||
          !Number.isFinite(video.duration) ||
          video.duration <= 0
        ) {
          return;
        }

        initialized = true;

        video.currentTime = 0;

        const playhead = { time: 0 };
        gsap.to(playhead, {
          time: video.duration,
          ease: "none",
          onUpdate: () => {
            requestedTime = playhead.time;
            if (!frameRequest) {
              frameRequest = requestAnimationFrame(() => {
                frameRequest = 0;
                if (Math.abs(requestedTime - appliedTime) >= 1 / 30) {
                  video.currentTime = requestedTime;
                  appliedTime = requestedTime;
                }
              });
            }
          },

          scrollTrigger: {
            trigger: section,

            start: "top top",
            end: "+=6000",

            scrub: 0.15,
            pin: true,

            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      };

      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
        initVideo();
      } else {
        video.addEventListener("loadedmetadata", initVideo, {
          once: true,
        });

        removeMetadataListener = () => {
          video.removeEventListener("loadedmetadata", initVideo);
        };
      }
    }, section);

    return () => {
      removeMetadataListener?.();
      cancelAnimationFrame(frameRequest);
      context.revert();
    };
  }, []);

  return (
    <main className="m-0 w-full max-w-none overflow-x-hidden bg-black p-0 text-white">

      {/* =====================================================
          FULL WIDTH SCROLL VIDEO
      ===================================================== */}

      <section
        ref={sectionRef}
        className="
          relative
          m-0
          h-[100svh]
          min-h-screen
          w-full
          max-w-none
          overflow-hidden
          p-0
        "
      >

        {/* VIDEO */}

        <video
          ref={videoRef}
          src="/videos/house.mp4"
          muted
          playsInline
          preload="auto"
          className="
            absolute
            inset-0
            block
            h-full
            w-full
            max-w-none
            object-content
          "
        />

        {/* OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            h-full
            w-full
            bg-black/20
          "
        />

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            z-10
            -translate-x-1/2
            md:bottom-10
          "
        >
          <div className="flex flex-col items-center gap-3">

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/60
                md:text-xs
              "
            >
              Scroll
            </span>

            <div className="h-10 w-px bg-white/40 md:h-12" />

          </div>
        </div>

      </section>

    </main>
  );
};

export default ScrollVideoPage;
