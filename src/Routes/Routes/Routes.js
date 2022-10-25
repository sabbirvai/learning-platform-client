import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-ochre-kappa.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                // loader: ({ params }) => fetch(`https://dragon-news-server-ochre-kappa.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            }
        ]
    }
])