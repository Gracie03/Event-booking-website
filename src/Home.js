import React from 'react';
import img1 from './image/img3.jpg';
import {motion} from 'framer-motion';

const Home = () => {

  const buttons = {
    start:{
    scale:1.2,
    transition:{ ease:'easeIn', duration:0.2,
     }
      }
  }



  return (

    <div id='home' className='section home'>
    <div className='home-container'>
      <div className='photo hp'><img src={img1} alt='home' className='img'/></div>
      <div className='home-article'>
      <div className='gig'>
        <h1 className=''>We Bring</h1>
        <h1 className='pink'>The Aura & Vibes </h1>
        <h1 className=''>to Satisfy your <span className='blue'> Event</span></h1>
      </div>
        <h4 className='small'>We stop at nothing to bring the energy and satisfaction to any events, because positivity and customer satisfaction is our top priority.<br/>
        let's make your imaginations a reality...</h4>
        <a href='#contact'>
        <motion.button
        variants={buttons}
        whileHover='start'
        className='btn'>Book Now</motion.button>
        </a>
      </div>    
    </div>  
  </div>
  )
}

export default Home