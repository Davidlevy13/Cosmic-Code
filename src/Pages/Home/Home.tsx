import Discover from "../../components/Discover/Discover";
import Progress from "../../components/Progress/Progress";
import Learning from "../../components/Learning/Learning";

function Home() {
    return (
        <div className="flex flex-col items-center p-4 space-y-6">
            <img src="/public\logo-cosmic.png" alt="logo Cosmic'Code" className="h-30 bg-white/20 p-2 rounded-3xl"/>

            <div className="grid grid-cols-2 gap-2 w-full max-w-md">
                <section><Discover /></section>
                <section><Learning /></section>
                <section className="col-span-2"><Progress /></section>
            </div>

            <button
              type="button"
              className="px-20 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-2xl -mt-4"
            >
                JOUER
            </button>
        </div>
    )
}

export default Home