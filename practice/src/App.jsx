import './App.css'
import Navbar from './component/Navbar';
import React, { useState } from 'react';
// import Text from './component/Text';
import { About } from './component/About';



function App() {
 
  
  return (
    <>
    
    <Navbar Home="HOME" About="ABOUT "/>
    <div className="container my-4">
    
      {/* <Text/> */}
      <About/>
      
     
   </div>
 
  
   
    </>
  );
}

export default App;
