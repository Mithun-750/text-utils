import React, { useState } from 'react';
import Button from '../Button/Button';
import './Playground.css';

export default function Playground(props) {
    const [text, setext] = useState('')
    let [time1, settime1] = useState(0)
    let [tyspeed, settyspeed] = useState((0).toFixed(2))
    const ToUpper = () => {
      setext(text.toUpperCase());
    }
    const ToLower = () => {
      setext(text.toLowerCase());
    }
    const ClearVal = () => {
      setext('');
      settyspeed((0).toFixed(2))
    };
  
    const handleChange = (event) => {
      setext((event.target.value).replace(/ {2,}$/g, ' '))
    }
    const StartCount = () => {
      settime1(Date.now());
    }
    const stopcount = (event) => {
      if (event.key === 'Enter') {
        var time2 = Date.now()
        var duration = ((time2 - time1) / 1000) - 0.3
        settyspeed(((text.length / 5) / (duration / 60)).toFixed(2))
        duration = 0
      }
    }
    
    const handleCopy = () => {
      let ctext = document.getElementById(`inputArea`)
      ctext.select();
      navigator.clipboard.writeText(ctext.value)
    }
  
    
  return (
    <>
      
      <div className="container">
          <textarea name="" id="inputArea" cols="90" rows="5" className={`inputArea_${props.crmode}`}
            placeholder='Enter Text'
            value={text}
            onChange={handleChange}
            onKeyDown={stopcount}
          ></textarea>
        </div>
        <div className="container">
          <div className={`btnContainer a_part a_part_${props.crmode}`}>
            <Button Text='Convert to UPPERCASE' onClick={ToUpper} />
            <Button Text='Convert to lowercase' onClick={ToLower} />
            <Button Text='Check typing speed (enter to stop)' onClick={() => { StartCount(); ClearVal(); }} />
            <Button Text='Reset' onClick={ClearVal} />
            <Button Text='Copy Text' onClick={handleCopy} />
          </div>
          <div className={`txtCenter a_part txtContainer a_part_${props.crmode}`}>
            <h2>Your text summary</h2>
            <h3>{text.split(" ").length - 1} words</h3>
            <h3>{text.length} characters</h3>
            <h3>{(0.008 * (text.length / 5)).toFixed(2)} minutes to read your text</h3>
            <h3>Speed - {tyspeed} wpm</h3>
          </div>
          <div className={`preview txtCenter a_part a_part_${props.crmode}`}>
            <h1>Preview</h1>
            <h3>{text}</h3>
          </div>
          
        </div>
    </>
  )
}
