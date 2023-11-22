import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom"

// Style - Fonts
import '../public/fonts/Montserrat-Regular.ttf'
import 'normalize.css'
import './assets/sass/style.scss'

// Layout
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'

// Page
import Home from './page/Home.jsx'
import About from './page/About.jsx'
import Accomodation from './page/Accomodation.jsx'

// Data
import data from './data/logements.json'

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Header />
      <Footer />
    </>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => data
      },
      {
        path: 'accomodation/:accomodationId',
        element: <Accomodation />,
        loader: () => data
      },
      {
        path: 'a-propos',
        element: <About />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
