import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BeanPage from "./pages/Bean";
import Beans from "./pages/Beans";
import Facts from "./pages/Facts";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import Review from "./pages/Review";
import Recipes from "./pages/Recipes";
import Combinations from "./pages/Combinations";
import History from "./pages/History";
import RecipePage from "./pages/Recipe";
import About from "./pages/About";

const router = createBrowserRouter([
    {
        path: "jellyBelly-homework18",
        element: <Layout />,
        loader: Loader,
        children: [
            { index: true, element: <Home /> },
            { path: "beans/bean/:id", element: <BeanPage /> },
            { path: "beans", element: <Beans /> },
            { path: "facts", element: <Facts /> },
            { path: "recipes/recipe/:id", element: <RecipePage />},
            { path: "recipes", element: <Recipes /> },
            { path: "combinations", element: <Combinations /> },
            { path: "history", element: <History /> },
            { path: "review", element: <Review /> },
            { path: "about", element: <About />},
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;
