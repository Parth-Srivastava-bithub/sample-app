import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here");
    const [boole, setBoole] = useState();
    const [value, setValue] = useState();
    const [difference, setDifference] = useState(text.length);

    const handleClick = () => {
        let disabled = true;
        if (boole === true) {
            let newText = text.toUpperCase();
            setText(newText);
            setBoole(false);
            setValue("LowerCase");
            props.showAlert("Converted To UpperCase", "success")

        }
        else {
            let newText = text.toLowerCase();
            setText(newText);

            setBoole(true);

            setValue("UpperCase");
            props.showAlert("Converted To LowerCase", "success")


        }
    }



    const handleClickCap = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Converted To Capitalized", "success")

    }

    const onChange = (event) => {
        console.log("Text got changed")
        setText(event.target.value)

    }
    const clearIt = () => {
        setText("");
        setDifference(0)
        props.showAlert("Cleared", "success")



    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const removeSpace = () => {
        let before = text;
        let newText = text.split(/[ ]+/);
        let after = newText.join(" ");
        setText(after);
        setDifference(before.length - after.length);

    }

    const capitalizeEach = () => {
        let wordArray = text.split(/[ ]+/);
        for (let index = 0; index < wordArray.length; index++) {
            wordArray[index] = wordArray[index].charAt(0).toUpperCase() + wordArray[index].slice(1);
        }
        let newText = wordArray.join(" ");
        setText(newText);
    }

    const stopSpeak = () => {
        window.speechSynthesis.cancel();
        props.showAlert("Speech stopped", "success");
    }

    const putRandom = () => {
        const randomText = `"Lorem ipsum dolor sit amet.","The quick brown fox jumps over the lazy dog.", "React makes it painless to create interactive UIs.", "Hello, world!" "Sample random text for testing Lorem ipsum dolor sit amet.", "The quick brown fox jumps over the lazy dog.", "React makes it painless to create interactive UIs.", "Hello, world!" "Sample random text for testingLorem ipsum dolor sit amet.", "The quick brown fox jumps over the lazy dog.", "React makes it painless to create interactive UIs.", "Hello, world!" "Sample random text for testingLorem ipsum dolor sit amet.", "The quick brown fox jumps over the lazy dog.", "React makes it painless to create interactive UIs.", "Hello, world!" "Sample random text for testingLorem ipsum dolor sit amet.", "The quick brown fox jumps over the lazy dog.", "React makes it painless to create interactive UIs.", "Hello, world!" "Sample random text for testing."`

        let start = Math.floor(Math.random() * (randomText.length + 1))
        let end = Math.floor(Math.random() * (randomText.length + 1))

        setText(randomText.substring(start, end));

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard!!", "success")
    }
    return (
        <div>
            <h1>{props.topHeading}</h1>
            <div className="mb-3">
                <label htmlFor="mybox" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={onChange} style={{
                    backgroundColor: props.mode === "dark" ? "black" : props.mode === "green" ? "lightgreen" : "white",
                    color: props.mode === "dark" ? "white" : props.mode === "green" ? "darkgreen" : "black"
                }}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-success me-2 mx-1 my-1" onClick={handleClick} type="button">Convert to {value}</button>
            <button disabled={text.length === 0} className="btn btn-success me-2 mx-1 my-1" onClick={handleClickCap} type="button">Convert To Capitalize</button>
            <button disabled={text.length === 0} className="btn btn-success me-2 mx-1 my-1" onClick={clearIt} type="button">Clear</button>
            <button disabled={text.length === 0} className="btn btn-success me-2 mx-1 my-1" onClick={speak} type="button">Speak</button>
            <button disabled={text.length === 0} className="btn btn-success me-2 mx-1 my-1" onClick={removeSpace} type="button">Remove Extra Spaces</button>
            <button disabled={text.length === 0} className="btn btn-success me-2 mx-1 my-1" onClick={capitalizeEach} type="button">Capitatlize each word</button>
            <button className="btn btn-success me-2 mx-1 my-1" onClick={putRandom} type="button">Random</button>
            <button disabled={text.length === 0} className="btn btn-success me-2 mx-1 my-1" onClick={stopSpeak} type="button">ShutUp</button>
            <button disabled={text.length === 0} className="btn btn-success me-2 mx-1 my-1" onClick={handleCopy} type="button">Copy</button>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>Total Words - {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} and Text Length - {text.length} characters</p>
                <p>{text.trim().length === 0 ? 0.000 : text.trim().split(/\s+/).length * 0.008} Minutes - Read</p>
                <p>{difference} spaces removed</p>
            </div>

        </div>
    )
}
