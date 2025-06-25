import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success")

    }
    else {
      setMode("dark");

      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success")

    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Navbar title="TextUtils" home={"Home"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} mode={mode} />

      </div>
      <About showAlert={showAlert} />


    </>

  );
}

export default App;
