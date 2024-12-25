import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BeanPage from "./pages/Bean";
import BeansPage from "./pages/Beans";
import FactsPage from "./pages/Facts";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import ReviewPage from "./pages/Review";
import RecipesPage from "./pages/Recipes";
import CombinationsPage from "./pages/Combinations";
import HistoryPage from "./pages/History";
import RecipePage from "./pages/Recipe";
import AboutPage from "./pages/About";

const router = createBrowserRouter([
    {
        path: "jellyBelly-homework18",
        element: <Layout />,
        loader: Loader,
        children: [
            { index: true, element: <Home /> },
            { path: "bean/:id", element: <BeanPage /> },
            { path: "beans", element: <BeansPage /> },
            { path: "facts", element: <FactsPage /> },
            { path: "recipe/:id", element: <RecipePage /> },
            { path: "recipes", element: <RecipesPage /> },
            { path: "combinations", element: <CombinationsPage /> },
            { path: "history", element: <HistoryPage /> },
            { path: "review", element: <ReviewPage /> },
            { path: "about", element: <AboutPage /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;
