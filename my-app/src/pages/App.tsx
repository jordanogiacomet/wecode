import React from 'react';
import Cabecalho from '../components/Cabecalho';
import Slides from '../components/Carousel';
import Lista from '../components/Lista';
import Scroll from '../components/Scroll';
import style from './App.module.scss'


function App() {
  return (
    <div className={style.App}>
         
          <Cabecalho/>
          <Slides/>
          <Lista/>
          
          
          <Scroll/>  
      </div>
  );
}

export default App;
