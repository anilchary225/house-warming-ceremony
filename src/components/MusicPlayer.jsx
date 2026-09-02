import { useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Music could not start:", error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/pooja-music.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-5
          right-5
          z-[9999]
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border-2
          border-amber-400
          bg-[#fff8e7]
          text-xl
          shadow-lg
          transition
          hover:scale-110
        "
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </>
  );
};

export default MusicPlayer;