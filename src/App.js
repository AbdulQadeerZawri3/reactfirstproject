import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/alerts';
import TextForm from './components/TextForum';
import React, { useState } from 'react';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
}

const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
setAlert({
  msg : message,
  type : type
});
setTimeout(()=> {
  setAlert(null);
}, 1500)

}



  
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
    </div>
    </> 
  );
}

export default App;