import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import SearchPage from "./pages/SearchPage";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import { Provider } from "react-redux";
import store from "./store/store";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "/category",
                element: <CategoryPage />,
            },
            {
                path: "/search",
                element: <SearchPage />,
            },
        ],
    },
]);
const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router}>
                <div>{/*  */}</div>
            </RouterProvider>
        </Provider>
    );
};

export default App;
