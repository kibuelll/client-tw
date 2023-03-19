import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import MyProfile from "../pages/Profile";
import SignUp from "../pages/SignUp"

const routes = createBrowserRouter([
  {
    path:"/login",
    loader : () => {
      if(localStorage.access_token) {
        return redirect("/")
      } else {
        return null
      }
    },
    element: <LoginPage/>
  },
  {
    element : <MainLayout/>,
    children : [
      {
        path: "/",
        element : <Dashboard/>
      },
      {
        path : "/profile",
        element : <MyProfile/>
      }
    ]
  },
  {
    path:'/register',
    element: <SignUp/>
  }
])

export default routes