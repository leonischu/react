import React, {useState}from 'react'


export default function Textform(props) {
    const [text, setText] = useState("Enter your text here");

    const handleUpClick =()=>{//arrow function banako
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const haldleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    // setText=("Enter text"); correct way to change state
  return (
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" value={text} onChange={haldleOnChange} rows="3"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Covert to uppercase</button>
    </div>
  )
}
