import { createBrowserRouter, redirect } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";



// const loader = async () => {
//   if(!localStorage.access_token) return redirect('/login')
//   return null
// }


const router = createBrowserRouter([
    {
    element : < NavBar />,
    children:[
      {
        path : '/',
        element : < Home />
      },
      {
        path : '/kendaraan',
        element : < Detail />
      }
    ]}
  ])

export default router