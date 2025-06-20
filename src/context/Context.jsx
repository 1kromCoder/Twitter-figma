import { createContext, useState } from "react";

export const Context = createContext()


export const TokenContext = ({ children }) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || false)
    localStorage.setItem("token", JSON.stringify(token))
    return (
        <Context.Provider value={{ setToken, token }}>{children}</Context.Provider>
    )
}
