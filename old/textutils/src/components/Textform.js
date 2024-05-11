import React, {useState}from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");
    const handleClearClick=()=>{
      let newText=''
      setText(newText)

    }

    const handleUpClick =()=>{//arrow function banako
     //   console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick =()=>{//arrow function banako
        //console.log("Lowercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const haldleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    // setText=("Enter text"); correct way to change state
  return (
        <>
        <div className="container">
      <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" id="myBox" value={text} onChange={haldleOnChange} rows="3"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to uppercase</button>
<button className="btn btn-primary mx-2 " onClick={handleLoClick}>Covert to Lowercase</button>
<button className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>

    </div>
    {/* my -2 ...3 ..4 vaneko margin  */}
    <div className="container my-3"> 
        <h1>Your text summary</h1>
        <p>{text . split(" ").length} Words and {text.length} characters</p>
        <p>{0.008 *text . split(" ").length }Minutes read </p>
        <h3>Preview</h3>
        <p>{text}</p>


    </div>
    </>
  )
}
