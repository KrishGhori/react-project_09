import { createContext, useState } from 'react'
import './App.css'
import ChaildA from './Components/ChaildA';

// step 1: creact the context

  const Themecontext = createContext();

// step2 : wrap all the chaild inside a probider
// step 3 : pass the value
// step 4 : goto to inside the consumer and consume the value

function App() {
 
 const [theme , uestheme] = useState('light'); 
  return (
 
    <Themecontext.Provider value={{theme ,uestheme}}>
      <div id='container' style={{backgroundColor : theme === 'light' ? "beige" : 'black'}}>
        <ChaildA></ChaildA>
      </div>
      
    </Themecontext.Provider>
  

  )
}

export default App
export {Themecontext}


