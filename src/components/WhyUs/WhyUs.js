import React from 'react'
import './WhyUs.css'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import nb from '../../assets/images/nb.png'
import adidas from '../../assets/images/adidas.png'
import nike from '../../assets/images/nike.png'
import blacktick from '../../assets/icons/black-tick.png'

const WhyUs = () => {
  return (
    <section id="whyus">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>
        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={blacktick} alt=""></img>
            <span>OVER 20+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={blacktick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={blacktick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={blacktick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span>OUR PARTNERS</span>
        <div className="partners">
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
          <img src={nb} alt="" />
        </div>
      </div>
    </section>
  )
}

export default WhyUs
