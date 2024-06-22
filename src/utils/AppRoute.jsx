import Create from '../componends/Create'
import DashBoard from '../componends/DashBoard'
import Home from '../componends/Home'
import View from '../componends/View'
import TopBar from '../componends/TopBar'
import { Navigate } from 'react-router-dom'


const AppRoute = [
    {
        path:'/',
        element:<><TopBar/><Home/></>

    },
    {
        path:'/dashboard',
        element:<><TopBar/><DashBoard/></>

    },
    {
        path:'/create',
        element:<><TopBar/><Create/></>

    },
    {
        path:'/feed/:id',
        element:<><TopBar/><View/></>

    },
    
    {
        path:'/*',
        element:<Navigate to='/'/>

    }
]

export default AppRoute
