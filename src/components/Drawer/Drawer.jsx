import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './Drawer.css'
import { Link, useLocation } from 'react-router-dom';



function Drawer({options}) {

    let drawerList = [
        {
            name : 'home', 
            icon : "fa-solid fa-house text-[12px] ms-1",
            component : '/'
        },
        {
            name : 'search', 
            icon : 'fa-solid fa-magnifying-glass text-[12px] ms-1',
            component :'/search'
            
        },
        {
            name : 'movies',
            icon : "fa-solid fa-film text-[12px] ms-1", 
            component : '/movies'
        },
        {
            name : 'TV-series',
            icon : "fa-solid fa-tv text-[12px] ms-1",
            component : '/TV-series'
        },
        {
            name : 'subscription',
            icon : "fa-solid fa-money-check-dollar ms-1 align-middle",
            component : '/subscription'
        }
    ];

    let [active, setActive] = React.useState('');    
    
    let {state, toggleDrawer} = options;
    
    let location = useLocation();

    React.useEffect(()=>{
        for(let i=0; i<drawerList.length; i++){
            
            if(drawerList[i].component == location.pathname){
                setActive(i);
                break;
            }
        }    

    }, [location]);

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        <div className=' bg-[#1E293B] text-white h-full min-w-56 py-2 px-4'>
                            <span className=' block  w-5 text-center ms-auto cursor-pointer' onClick={toggleDrawer(false)}>
                                <i className="fa-solid fa-xmark" />
                            </span>
                            <ul className='drawer-list capitalize text-lg font-madimi '>
                                {drawerList.map((list, i)=><li key={i} className={`my-4 cursor-pointer ${active == i?'active':''} px-2 rounded-md`} onClick={()=>setActive(i)}>
                                    <Link to={list.component} className=' text-white w-full inline-block'>
                                        <span className=' align-middle'>
                                            {list.name}
                                        </span>
                                        <i className={list.icon} />
                                    </Link>
                                </li>)}

                                
                            </ul>
                        </div>
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}


export default React.memo(Drawer);