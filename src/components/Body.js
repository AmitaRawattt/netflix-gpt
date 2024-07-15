import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"



const Body = () => {
  return (
    <div>
        <RouterProvider router={appRouter}>
     
        <Outlet/>
        </RouterProvider>
    </div>
  )
}
const appRouter=createBrowserRouter([
  
    {
      path:'/',
      element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    }
])

export default Body