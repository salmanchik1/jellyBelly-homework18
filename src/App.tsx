/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, SetStateAction, useState } from "react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";

type ContextType = {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
};
export const ThemeContext = createContext<ContextType | null>(null);

function App() {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`container ${theme}`}>
                <RouterProvider router={router} />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
