import React, { useState } from 'react'
import './TC.css'

export default function TempConvert() {
    const [text, setText] = useState("Enter the tmep here");
    const onChange = (event) => {
        setText(event.target.value);
    }

    const buttonClicked = () => {
        let celcius = text;
        let fahrenheit = (parseFloat(celcius) * 9 / 5) + 32;
        setText(fahrenheit);
    }
    return (
        <div className='textbody'>
            <textarea name="tempConverter" id="tcarea" value={text} onChange={onChange}></textarea>
            <button className="btn" onClick={buttonClicked}>Convert</button>
        </div>
    )
}
