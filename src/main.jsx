import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import LayoutPage from './layout/LayoutPage'
import './index.css'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import HomePage from './pages/HomePage/HomePage'
import TimeLinePage from './pages/TimeLinePage/TimeLinePage'
import StatsPage from './pages/StatsPage/StatsPage'
import FriendDetails from './pages/HomePage/FriendDetails'
import TimelineProvider from './Context/TimelineContext'

const router = createBrowserRouter([
  {
    path : '/',
    element : <LayoutPage/>,
    children : [
      {
        index : true,
        element : <HomePage/>
      },
      {
        path:'timeline',
        element : <TimeLinePage/>
      },
      {
        path:'stats',
        element: <StatsPage/>
      },
      {
        path : 'friendDetail/:id',
        element: <FriendDetails/>,
        loader : () => fetch("/friendsData.json")
      }
    ],
    errorElement : <ErrorPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <TimelineProvider>
    <RouterProvider router={router}/>
  </TimelineProvider>
)
