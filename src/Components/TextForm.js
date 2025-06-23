import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here");
    const [boole, setBoole] = useState();
    const [value, setValue] = useState();

    const handleClick = () => {
        if (boole == true) {
            let newText = text.toUpperCase();
            setText(newText);
            setBoole(false);
            setValue("LowerCase");

        }
        else {
            let newText = text.toLowerCase();
            setText(newText);

            setBoole(true);

            setValue("UpperCase");


        }
    }

    const handleClickCap = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
    }

    const onChange = (event) => {
        console.log("Text got changed")
        setText(event.target.value)
    }
    const clearIt = () => {
        setText("");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    return (
        <div>
            <h1>{props.topHeading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={onChange}></textarea>
            </div>
            <button className="btn btn-success me-2" onClick={handleClick}>Convert to {value}</button>
            <button className="btn btn-success me-2" onClick={handleClickCap}>Convert To Capitalize</button>
            <button className="btn btn-success me-2" onClick={clearIt}>Clear</button>
            <button className="btn btn-success" onClick={speak}>Speak</button>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>Total Words - {text.split(" ").length - 1} and Text Length - {text.length} characters</p>
                <p>{text.split(" ").length * 0.008} Minutes Read</p>
            </div>

        </div>
    )
}
