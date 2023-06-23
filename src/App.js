import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import About from './Components/About';


function App() {
  
  const [Theme, setTheme] = useState({
    color: 'black',
    backgroundColor: 'white',
 
  })


  function setBodyColor(val){
    document.body.style.backgroundColor = val
  }
  

  function changeTheme(val){
    if(val=='black'|| val=='green'){
     setTheme({
     color:'white',
     backgroundColor: val
   
      })
    }
  else{
    setTheme({
      color:'black',
      backgroundColor: val
    
       })
     }
   }


  return (
    <>


{/* <Router> */}
   <div className='d-flex justify-content-evenly' style={Theme}>
       <Navbar theme={Theme}/>


       <div className='container w-25 p-3' style={Theme}>
          {/* this is how we call multiple functions in onClick */}
                <button type="button" id="lightblue" onClick={()=>{changeTheme('lightblue');setBodyColor('lightblue')}}></button>
                <button type="button" id="green" onClick={()=>{changeTheme('green');setBodyColor('green')}}></button>
                <button type="button" id="red" onClick={()=>{changeTheme('orange');setBodyColor('orange')}}></button>
                <button type="button" id="black" onClick={()=>{changeTheme('black');setBodyColor('black')}}></button>        
           </div>
    </div>

    {/* <Routes>
          <Route path="/" element={<TextArea theme={Theme} />} />
         
          <Route path="/about" element= {<About/> } />
         
  
    </Routes>

    
     </Router> */}
<TextArea theme={Theme}/>
</>

  );
}

export default App;
