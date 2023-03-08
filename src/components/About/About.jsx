import React from 'react'
import './About.css'

export default function About(props) {
  return (
    <>
      <div className={`a_part_${props.crmode} abt_con txt-center`}>

        <h1>About this website</h1>
        <h3 >Hello There, This webpage was made using React by <a href="https://mithun-750.github.io/" target="_blank" rel="noopener noreferrer"><strong>Mithun U</strong></a></h3>
        <h3>This is a simple textutils website where you can play with text. There are also some additional fetures like calculating the approximate time to read your text and also calculating your approximate typing speed.</h3>
        <h3>This website is still under development. The source code is avalable <a href="https://github.com/Mithun-750/text-utils" target="_blank" rel="noopener noreferrer">here</a>.</h3>
      </div>
    </>
  )
}
