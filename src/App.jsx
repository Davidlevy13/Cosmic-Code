import './App.css'
import Home from './Pages/Home/home';

function App() {


  return (
    <>
    <section className="relative z-10">
    <video autoPlay muted loop id="background-video">
  <source src="/video/background-galaxy.mp4" type="video/mp4"/>

</video>
<Home/>
</section>
    </>
  )
}

export default App
