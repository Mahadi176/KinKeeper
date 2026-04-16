import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import LayoutPage from './layout/LayoutPage'
import './index.css'
import ErrorPage from './pages/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path : '/',
    element : <LayoutPage/>,
    children : [
      {

      }
    ],
    errorElement : <ErrorPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />,
  </StrictMode>,
)
