import React, { useContext, useState } from 'react'
import { Themecontext } from '../App';





const ChaildC = () => {

     const {theme , uestheme}  = useContext(Themecontext);
    function handletheme (){
        if(theme === 'light')
          uestheme('Dark')
        else
          uestheme('light')
    }

  return (
    <div>
      <button onClick={handletheme}>change theme {theme}</button>
     
    </div>
  )
}

export default ChaildC

