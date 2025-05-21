import Discover from "../../components/Discover/Discover";
import Progress from "../../components/Progress/Progress";
import Learning from "../../components/Learning/Learning";

function Home() {
    return (

        <div>
            {/* <section>
                LOGO
            </section> */}
            <section>
                <Discover />
            </section>
            <section>
                <Learning />
            </section>
            <section>
                <Progress />
            </section>
            <button type="button">JOUER</button>
        </div>

    )
}

export default Home;