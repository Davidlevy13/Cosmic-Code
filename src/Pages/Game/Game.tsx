import Quiz from "../../components/Quiz/Quiz";

function Game () {
    return (
<>
<section className="flex justify-center items-center  mt-5">
<h1 className="font-bold text-xl text-[#0ACAD4] text-center">Aide BIOME <br/> à atteindre la Terre</h1>
<img src="reponse-juste.png" alt="Alien content" className="h-30" />
        
</section>
<Quiz/>
</>
        
    )
}

export default Game;