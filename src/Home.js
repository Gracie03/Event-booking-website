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

  const entry = {
    start:{
      x:'200vw', opacity:0
    },
    stop:{
      x: '0', opacity:1,
      transition:{ ease:'easeIn', duration:0.8, delay:0.5, type:'spring', stiffness:300,
    }
    },
   }

   const fade = {
    start:{
       opacity:0
    },
    stop:{
       opacity:1,
      transition:{ ease:'easeIn', duration:2, delay:0.5, type:'spring', stiffness:300,
    }
    },
   }

  return (

    <div id='home' className='section home'>
    <div className='home-container'>
      <motion.div
      variants={fade}
      initial='start'
      animate='stop' className='photo hp'><img src={img1} alt='home' className='img'/></motion.div>
      <motion.div
      variants={entry}
      initial='start'
      animate='stop' className='home-article'>
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
      </motion.div>    
    </div>  
  </div>
  )
}

export default Home