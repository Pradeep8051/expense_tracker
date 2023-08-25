import React, { useEffect } from 'react'
import "./animation.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

function ScroolAnimation() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className='top text-center text-white fs-1 text-align-center '>
      <center>      <h1 className='text-center'>Welcome React & Aos Animation</h1>
        <h1>Fade Aniamtion</h1>
        <div className='animation text-align-center' data-aos="fade-up">fade-up</div>
        <div className='animation' data-aos="fade-down">fade-down</div>
        <div className='animation' data-aos="fade-right">fade-right</div>
        <div className='animation' data-aos="fade-left">fade-left</div>
        <div className='animation' data-aos="fade-up-right">fade-up-right</div>
        <div className='animation' data-aos="fade-up-left">fade-up-left</div>
        <h1>Flip Aniamtion</h1>
        <div className='animation' data-aos="flip-right">flip-right</div>
        <div className='animation' data-aos="flip-left">flip-left</div>
        <h1>Zoom Aniamtion</h1>
        <div className='animation' data-aos="zoom-in">zoom-in</div>
        <div className='animation' data-aos="zoom-out">zoom-out</div>
      </center>

    </div>
  )
}

export default ScroolAnimation



