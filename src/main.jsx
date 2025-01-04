import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import Home from './pages/Home/Home';
import AllCampaigns from './pages/AllCampaingns/AllCampaigns';
import MyCampaigns from './pages/MyCampaigns/MyCampaigns';
import MyDonations from './pages/MyDonations/MyDonations';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Error404 from './pages/Error404/Error404';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import AddCampaign from './pages/AddCampaign/AddCampaign'
import Details from './pages/Details/Details'
import UpdateCampaign from './pages/UpdateCampaign/UpdateCampaign'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/add-campaign',
        element: <PrivateRoute><AddCampaign /></PrivateRoute>
      },
      {
        path: '/my-campaigns',
        element: <PrivateRoute><MyCampaigns /></PrivateRoute>
      },
      {
        path: '/update-campaign/:id',
        element: <PrivateRoute><UpdateCampaign /></PrivateRoute>
      },
      {
        path: '/my-donations',
        element: <PrivateRoute><MyDonations /></PrivateRoute>
      },
      {
        path: '/campaigns',
        element: <AllCampaigns />
      },
      {
        path: '/campaigns/:id',
        element: <PrivateRoute><Details /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
