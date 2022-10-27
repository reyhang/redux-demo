import './App.css';
import Header from './Components/Header';
import React from 'react';
import { useSelector } from 'react-redux';
import  { Darkmode, LightMode } from './styles'
 
function App() {

  const isDarkMode = useSelector((state) => state.ui.darkMode)
 

  return (
    <div className="App">
     <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      {isDarkMode ?
        <Darkmode> 
          <Header/>
                </Darkmode>

        :

        <LightMode>
          <Header/>
        </LightMode>
      }
    </div>
  );
}

export default App;
