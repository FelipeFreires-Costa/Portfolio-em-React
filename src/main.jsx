import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BoasVindas from './pages/BoasVindas.jsx'
import Portfolio from './pages/Portfolio.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BoasVindas />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
