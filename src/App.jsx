import React from 'react'
import AppRoute from './utils/AppRoute'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

function App() {
const router = createBrowserRouter(AppRoute)
return<>
  <RouterProvider router={router}/>
  
  </>
}

export default App