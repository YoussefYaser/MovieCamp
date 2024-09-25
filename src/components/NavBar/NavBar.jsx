import { Link } from 'react-router-dom'
import './NavBar.css'
import React, { memo, useContext, useEffect, useState } from 'react'
import { navBarContext } from '../../Context/navBar context/NavBarContext';
import Drawer from '../Drawer/Drawer';


function NavBar() {

    let [hideNav, setHideNav] = useState(false);

    let {navBar} = useContext(navBarContext);


    
    let scrollPoint = window.scrollY;
    function navScroll(){
        if(window.scrollY > scrollPoint && window.scrollY > navBar.current.clientHeight){
            setHideNav(true);
            scrollPoint = window.scrollY;
        }
        else{
            setHideNav(false);
            scrollPoint = window.scrollY;
            
        }
    }

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, right: open });
    };

    useEffect(()=>{
        window.addEventListener('scroll', navScroll);
        return ()=>{
            window.removeEventListener('scroll', navScroll);
        }
    }, []);

    return (
        <>
            <nav className={`py-2 bg-[#212736e0] fixed z-[999] w-full top-0 ${hideNav?'opacity-0':'opacity-100'} transition-opacity duration-700`} ref={navBar}>
                <div className="container flex justify-between items-center">
                    <h1 className=' font-laila hover:scale-110 transition-transform duration-300'>
                        <Link to={'/'} className='text-mainColor font-bold'>
                            MovieCamp
                        </Link> 
                    </h1>
                    <div className='group flex justify-evenly items-end flex-col  size-8 cursor-pointer' onClick={toggleDrawer(true)}>
                        <span className=' w-full border-2 rounded dark:border-white border-black'></span>
                        <span className=' w-1/2 group-hover:w-full border-2 rounded dark:border-white border-black transition-all duration-200'></span>
                        <span className=' w-full border-2 rounded dark:border-white border-black'></span>
                    </div>
                </div>
            </nav>
            <div className=' absolute'>
                <Drawer options={{state, toggleDrawer}}></Drawer>
            </div>
        </>
    )
}


export default memo(NavBar);