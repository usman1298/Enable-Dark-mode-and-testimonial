import React, {useState} from 'react'


function Text() {
  const handleUpClick=()=>{
    // console.log("UpperCase was Clicked" +text)
    let newText=text.toUpperCase();
    setText(newText);
    
   }
   const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    
   }
   const handleClearClick=()=>{
    let newText=" ";
    setText(newText);
    
   }
   const handleCapitalizedClick = () => {
    let newText = text
    .split(' ') 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
    .join(' ');  
    setText(newText);
  
    
   }
   const handleOnchange=(event)=>{
    //  console.log("on Change");
     setText(event.target.value)
    }
  const [text, setText]=useState(" ");
  // text="New text" wrong way to change the state
//  setText("New text"); Right way to change the state

  return (
    <>
<div className="mb-3">
 <h1><label htmlFor="exampleFormControlTextarea1" className="form-label">Enter The Text Below</label></h1> 
  <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="10"></textarea>
  
 </div>
 <button className="btn btn-info mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
 <button className='btn btn-warning mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
 <button className='btn btn-primary mx-2' onClick={handleCapitalizedClick}>Capitalized Text</button>
 <button className='btn btn-danger mx-2' onClick={handleClearClick}>Clear Text</button>

 <div/>
 <div className="container my-3">
  <h1>Text Summary</h1>
   <p>{text.split(" ").length} Words and {text.length} Characters</p>
  <h2>Preview</h2>
  <p>{text}</p>
 </div>
</>
  )
}

export default Text;