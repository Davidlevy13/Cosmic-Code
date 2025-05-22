import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import Home from './Pages/Home/Home.jsx'
import Game from './Pages/Game/Game.jsx'
import NotFound404 from './Pages/NotFound404/NotFound404.js'

const router = createBrowserRouter([
  {
    element: <App />,
     children: [
      { path: '/', element: <Home /> },
    { path: '/game', element: <Game /> }, 
    { path: '*', element: <NotFound404 />},
     ]
  },
])

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

