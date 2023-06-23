import React, { useState } from 'react';
export default function TextArea(props) {

  
let words=0;
       function handleChange(event) {
       setText(event.target.value);
     
      }

      function handleClick(){
       
       let newtext=text.toUpperCase()
       setText(newtext)
        
      }
    const [text, setText] = useState("Enter Text Here");
  return (

    <div className="m-3 row justify-content-center" style={props.theme}>
     
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" style={props.theme} value={text} onChange={handleChange}></textarea>
        <div className="d-flex justify-content-center ">

        <button type="button" className="btn btn-primary mt-3 "  onClick={handleClick}>To Uppercase</button>
        </div>
        <div>Total words are : {text.split(" ").length}</div>
    </div>
 
  )
}







