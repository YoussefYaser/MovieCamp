import { createContext, useRef } from "react"


export let navBarContext = createContext();


export default function NavBarContext({children}) {

    let navBar = useRef();

    return (
        <navBarContext.Provider value={{navBar}}>
            {children}
        </navBarContext.Provider>
    )
}
