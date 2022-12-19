import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {
  const mobile =window.innerWidth<=768?true:false;
  const transition={type: 'spring', duration: 3 }
  return (
    <div className="hero" id='home'>
      <div className='blur hero-blur'></div>
      <div className="left-h">
        <Header />
        <div className="best-ad">
          <motion.div
            initial={{left: mobile? "170px" : "330px"}}
            whileInView={{left: '8px'}}
            transition={{...transition,type: 'tween'}}
          ></motion.div>
          <span>THE BEST FITNESS EXPERIENCE CLUB IN THE TOWN</span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body <span className='stroke-text'>!!!</span></span>
          </div>
          <div>
            <span>In here we will help you to shaoe and build your ideal body and live up your life to fullest</span>
          </div>
        </div>
        <div className="figures">
          <div><span>
            <NumberCounter end={150} start={100} delay='3' preFix="+"/>
            </span><span>expert coachs</span></div>
          <div><span>
          <NumberCounter end={1000} start={800} delay='4' preFix="+"/>
            </span><span>members joined</span></div>
          <div><span>
          <NumberCounter end={50} start={0} delay='1' preFix="+"/>
            </span><span>fitness programs</span></div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div 
         initial={{right: '-1rem'}}
         whileInView={{right: '4rem'}}
         transition={transition}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
        <img src={hero_image} alt="" className='hero-image' />
        <motion.img 
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className='hero-image-back' />
        <motion.div
         initial={{right: '37rem'}}
         whileInView={{right: '28rem'}}
         transition={transition}
         className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span><span>250 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
