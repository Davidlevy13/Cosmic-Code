import { useEffect, useRef, useState } from "react";
import { GoUnmute, GoMute } from "react-icons/go";
import HTML from "../../components/Quiz/HTML";
import CSS from "../../components/Quiz/CSS";
import JS from "../../components/Quiz/JS";
import React from "../../components/Quiz/React";
import SQL from "../../components/Quiz/SQL";

function Game () {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false)

    const startAudio = () => {
        if (audioRef.current) {
            const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true); // Si la musique démarre avec succès
          })
          .catch((error) => {
            console.warn("Lecture bloquée ou échouée : ", error);
          });
        }}}

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.2; // Set volume 
            audio.loop = true; // Loop the audio
            audio.play().catch((error) => {
                console.error("Erreur de lecture de la musique :", error);
            });
        }
    }, []);

    return (
<>
<img
      src="reponse-juste.png"
      alt="Alien content"
      className="w-20 animate-bounce-slow mt-2"
    />
<section className="flex justify-center -mt-15 ">
  <button
    onClick={toggleMute}
    className="absolute top-3 right-3 text-2xl text-white hover:scale-110 transition-transform duration-200"
  >
    {!isMuted ? <GoUnmute /> : <GoMute />}
  </button>

  <audio ref={audioRef} src="/alien-antics.mp3" />

  <div className="flex items-center">
    
    <h1 className="text-2xl font-orbitron text-[#0ACAD4] font-semibold text-center mb-10">
      <span className="text-green-200 font-light">Aide </span>
      <span className="text-[#0ACAD4] font-bold">BIOME</span><br />
      <span className="text-white italic">à atteindre la Terre</span>
    </h1>
  </div>
</section>
<section className="relative mx-auto h-[600px] w-[400px]">
    <button onClick={() => {
      setShowModal(true);
    }}>
  <img src="1.png" alt="Terre" className="h-35 w-35 absolute top-[20px] left-[110px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full"/>
  </button>

  <button onClick={() => {
    setShowModal(true);
  }}>
  <img src="2.png" alt="Terre" className="h-25 absolute top-[170px] left-[70px] w-[100px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full" />
  </button>

  <button onClick={() => {
    setShowModal(true);
  }}>
  <img src="3.png" alt="Terre" className="h-25 absolute top-[240px] left-[190px] w-[100px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full" />
  </button>

 <button onClick={() => {
  setShowModal(true);
 }}>
    <img src="4.png" alt="Terre" className="h-25 absolute top-[320px] left-[80px] w-[100px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full" /></button> 


 <button onClick={() => {
  setShowModal(true);
 }}>
    <img src="5.png" alt="Terre" className="h-25 absolute top-[400px] left-[190px] w-[100px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full" /></button> 
</section>

 {/* Pop-up */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white text-black w-full  overflow-y-auto p-8  rounded-xl shadow-2xl  ">
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-red-600"
              onClick={() => setShowModal(false)}
              aria-label="Fermer la fenêtre"
            >
              &times;
            </button>
            <div className="text-base leading-relaxed space-y-5 whitespace-pre-line">
             {selectedQuiz === "HTML" && <HTML />}
             {selectedQuiz === "CSS" && <CSS />}
             {selectedQuiz === "JS" && <JS />}
             {selectedQuiz === "React" && <React />}
             {selectedQuiz === "SQL" && <SQL />}
            </div>
          </div>
        </div>
      )}

</>
        
    )
}

export default Game;