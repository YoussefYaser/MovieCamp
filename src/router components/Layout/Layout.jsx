import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import './Layout.css'
import { useContext, useEffect, useState } from 'react';
import { navBarContext } from '../../Context/navBar context/NavBarContext';

export default function Layout() {

    let [navHeight, setNavHeight] = useState('');
    let {navBar} = useContext(navBarContext);


    useEffect(()=>{
        setNavHeight(navBar.current.clientHeight);
    }, [navBar]);

    return (
        <div className="layout bg-slate-200 dark:bg-dark min-h-screen" style={{paddingTop : `${navHeight}px`, paddingBottom : `${navHeight}px`}}>
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>
    )
}
