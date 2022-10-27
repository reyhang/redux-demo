import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {disableDarkMode, enableDarkMode} from '../../Redux/ui/ui.slice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon,faSun} from "@fortawesome/free-solid-svg-icons"


const Header =() => {

    const isDarkMode = useSelector((state)=> state.ui.darkMode);
    const dispatch = useDispatch();

   return(
        <header>
            <h1> {isDarkMode? 'Gece Modu' : 'Gündüz Modu' } </h1> 
            <button onClick={()=>dispatch(enableDarkMode())}>
Gece Modu <FontAwesomeIcon icon={faMoon} />
  </button>
            <button onClick={()=>dispatch(disableDarkMode())}> <FontAwesomeIcon icon={faSun} /> Gündüz Mod </button>

        </header>
     )
}



export default Header;