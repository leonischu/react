// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode,setMode] = useState('light');//whether dark mode is enabled or not 
  return (
    <> 
<Navbar title="Textutils" mode={mode}/>
<div className="container">
  <Textform heading="Enter the text to analyze"/>
  {/* <About/> */}
</div>

    </>
  );
}

export default App;
