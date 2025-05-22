import './App.css'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <section className="relative z-10 max-h-screen">
        <video autoPlay muted loop id="background-video">
          <source src="/video/background-galaxy.mp4" type="video/mp4" />
        </video>
        <Outlet />
      </section>
    </>
  )
}

export default App
