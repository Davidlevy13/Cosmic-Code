import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

    const [selectedQuiz, setSelectedQuiz] = useState("");
    const [isSuccessHTML, setIsSuccessHTML] = useState(false);
    const [isSuccessCSS, setIsSuccessCSS] = useState(false);
    const [isSuccessJS, setIsSuccessJS] = useState(false);
    const [isSuccessReact, setIsSuccessReact] = useState(false);
    const [isSuccessSQL, setIsSuccessSQL] = useState(false);

  const [position, setPosition] = useState({ top: 20, left: 160 });
  const [moving, setMoving] = useState(true);

 useEffect(() => {
    if (!moving) return;

    const moveInterval = setInterval(() => {
      const randomTop = Math.floor(Math.random() * window.innerHeight * 0.8);
      const randomLeft = Math.floor(Math.random() * window.innerWidth * 0.8);
      setPosition({ top: randomTop, left: randomLeft });
    }, 500);

    return () => clearInterval(moveInterval);
  }, [moving]);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

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

    const handleResultHTML = (result: boolean) => {
        setIsSuccessHTML(result);};

    const handleResultCSS = (result: boolean) => {
        setIsSuccessCSS(result);};

    const handleResultJS = (result: boolean) => {
        setIsSuccessJS(result);};

    const handleResultReact = (result: boolean) => {
        setIsSuccessReact(result);};

    const handleResultSQL = (result: boolean) => {
        setIsSuccessSQL(result);};

    return (
<>
<Link to="/">
<img
      src="reponse-juste.png"
      alt="Alien content"
      className="w-20 animate-bounce-slow mt-2"
    />
    </Link>
<section className="flex justify-center -mt-15 ">
  <button
    onClick={toggleMute}
    className="absolute top-3 right-3 text-2xl text-white hover:scale-110 transition-transform duration-200"
  >
    {!isMuted ? <GoUnmute /> : <GoMute />}
  </button>

  <audio ref={audioRef} src="/alien-antics.mp3" />

  <div className="flex items-center">
    
    <h1 className="text-2xl font-orbitron text-[#0ACAD4] font-semibold text-center mb-5">
      <span className="text-white italic">Explore les planètes</span><br />
      <span className="text-green-200 font-light">avec </span>
      <span className="text-[#0ACAD4] font-bold">BIOME</span>
      
    </h1>
  </div>
</section>
<section className="relative">
<img
        src="soucoupe.png"
        alt="alien"
        onClick={handleClick}
        className="h-10 w-10 absolute transition-all duration-1000 ease-in-out shadow-lg shadow-white/40 rounded-full cursor-pointer"
        style={{
          top: position.top,
          left: position.left,
        }}
      />

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-white/60 flex items-center justify-center z-50">
          <div className="bg-white  p-6 rounded-xl shadow-xl w-96 text-center">
                        <button
              onClick={handleClose}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}



  <button onClick={() => {
    setShowModal(true);
    setSelectedQuiz("HTML");
  }}>
    {!isSuccessHTML ? (
      <img src="planeteHTML.png" alt="HTML" className="h-25 lg:h-35 absolute top-[20px] left-[50px] w-[100px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full" />) : ( <img src="checkHTML.png" alt="HTML" className="h-35 absolute top-[20px] left-[50px] w-[100px]  rounded-full" />) }
  </button>

  <button onClick={() => {
    setShowModal(true);
    setSelectedQuiz("CSS");
  }}>
    {!isSuccessCSS ? (
      <img src="planeteCSS.png" alt="CSS" className="h-25 absolute top-[90px] left-[230px] w-[100px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full" />) : ( <img src="checkCSS.png" alt="CSS" className="h-35 absolute top-[90px] left-[230px] w-[100px]  rounded-full" />) }
  </button>

 <button onClick={() => {
  setShowModal(true);
  setSelectedQuiz("JS");
 }}>
  {!isSuccessJS ? (
    <img src="planeteJS.png" alt="JS" className="h-25 absolute top-[190px] left-[80px] w-[100px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full" />) : ( <img src="checkJS.png" alt="JS" className="h-35 absolute top-[190px] left-[80px] w-[100px]  rounded-full" />) }
</button> 

 <button onClick={() => {
  setShowModal(true);
  setSelectedQuiz("React");
 }}>
  {!isSuccessReact ? (
     <img src="planeteREACT.png" alt="React" className="h-25 absolute top-[260px] left-[250px] w-[100px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full" />) : ( <img src="checkREACT.png" alt="React" className="h-35 absolute top-[260px] left-[250px] w-[100px]  rounded-full" />)}
   </button> 

 <button onClick={() => {
      setShowModal(true);
      setSelectedQuiz("SQL");
    }}>
      {!isSuccessSQL ? (
         <img src="planeteSQL.png" alt="SQL" className="h-25 w-25 absolute top-[360px] left-[90px] animate-[spin_30s_linear_infinite] shadow-lg shadow-white/40 rounded-full"/>) : ( <img src="checkSQL.png" alt="SQL" className="h-35 absolute top-[360px] left-[90px] w-[100px]  rounded-full" />) }
  </button>

</section>

 {/* Pop-up */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white text-black w-full  overflow-y-auto p-8  rounded-xl shadow-2xl  ">
            <button
              className="absolute top-3 right-4 text-4xl font-extrabold text-[#4ABFA9] hover:text-red-600"
              onClick={() => setShowModal(false)}
              aria-label="Fermer la fenêtre"
            >
              &times;
            </button>
            <div className="text-base leading-relaxed space-y-5 whitespace-pre-line">
             {selectedQuiz === "HTML" && <HTML setResultHTML={handleResultHTML} />}
             {selectedQuiz === "CSS" && <CSS setResultCSS={handleResultCSS} />}
             {selectedQuiz === "JS" && <JS setResultJS={handleResultJS}/>}
             {selectedQuiz === "React" && <React setResultReact={handleResultReact} />}
             {selectedQuiz === "SQL" && <SQL setResultSQL={handleResultSQL} />}
            </div>
          </div>
        </div>
      )}

</>
        
    )
}

export default Game;