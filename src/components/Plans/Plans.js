import React from 'react'
import { plansData } from '../../utils/plansData'
import blackTick from '../../assets/icons/black-tick.png'
import './Plans.css'

const Plans = () => {
  return (
    <section id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">ARE YOU READY TO </span>
        <span>START YOUR JOURNEY </span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/*Plans Card*/}
      <div className="plans">
        {plansData.map((plan, index) => (
          <div key={index} className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature">
                  <img src={blackTick} alt="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div className="extra-features">
              <span>See more benefits</span>
            </div>
            <button className="btn">Join Us Now</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Plans
