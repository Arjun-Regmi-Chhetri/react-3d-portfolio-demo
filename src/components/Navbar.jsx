import { useState } from 'react';

import {Link} from 'react-router-dom';
import {NavLinks} from '../constants';
import {Styles} from '../styles';
import {logo, menu, close} from  '../assets';
const Navbar = () =>{
    const[active, setActive] = useState('');
    const[toggle, setToggle] = useState(false);
    return(
        <nav className={`${Styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}>
            <div className='w-full flex items-center justify-between max-w-7xl mx-auto'>
                <Link to="/" onClick={
                   ()=>{
                    setActive("");
                    window.scrollTo(0,0);
                   }
                }>
                    <img src={logo} alt="logo" className='w-12 h-12 object-contain'/>
                   
                </Link>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {
                        NavLinks.map((link)=>(
                            <li key={link.id} className={`${
                                active === link.title ? "text-primary" : "text-secondary"
                              } hover:text-primary text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(link.title)}>
                                
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))
                    }
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center'>

                    <img src={toggle ? close :menu} alt="menu" className='w-[28px] h-[28px] object-contain z-[1000] ' 
                    onClick={()=>setToggle(!toggle)}/>

                    <div className={`${!toggle ? "hidden" : "flex"}  `}>
                        <div className='
                         w-full h-screen fixed top-0 left-0 z-[-100] '
                         style={{
                            backdropFilter:'blur(12px)'
                         }}

                         onClick={()=>setToggle(!toggle)}
                         ></div>

                      
                        <ul className='list-none flex   justify-center items-center flex-1 flex-col gap-10 z-[10] ease-in-out duration-500 rounded-x  h-screen absolute top-0 right-0 mx-0 my-0 min-w-[100%] z-[-10]'>
                            {
                                NavLinks.map((link)=>(
                                    <li key={link.id} className={`${
                                        active === link.title ? "text-primary" : "text-secondary"
                                    } hover:text-primary text-[18px] font-medium cursor-pointer`} onClick={()=>{setActive(link.title)
                                    setToggle(!toggle)}}>
                                        <a href={`#${link.id}`}>{link.title}</a>
                                    </li>
                                ))
                            }
                         </ul>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;