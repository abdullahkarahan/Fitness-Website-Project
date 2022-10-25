import React from 'react'
import './Hero.css'
import hero_image from '../../assets/images/hero_image.png'
import fire from '../../assets/images/fire.png'
import NumberCounter from 'number-counter'
const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="left-h">
        {/*Hero Header*/}
        <div className="hero-text">
          <div>
            <span>Strong </span>
            <span className="stroke-text">Mind</span>
          </div>
          <div>
            <span className="stroke-text">Strong </span>
            <span>Body</span>
          </div>
          <div>
            <span>
              Eat right, sleep enough and work hard. You will become the best
              you can be
            </span>
          </div>
        </div>
        {/*Figures*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={20} start={0} delay="1" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={500} start={100} delay="1" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={40} start={10} delay="1" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/*Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/*Hero Images*/}
      <div className="right-h">
        <img src={hero_image} alt="" className="hero-image" />
        <img src={fire} alt="" className="hero-fire" />
      </div>
    </div>
  )
}

export default Hero
