import React from 'react';
import { FaInstagram, FaTwitter,FaFacebook} from "react-icons/fa";
import {motion} from 'framer-motion';



const Footer = () => {

  const bounce = {
    bouncer:{
     scale:1.2,
      transition:{
        repeatType:'mirror',
       repeat:Infinity,duration:0.8, ease:'easeOut'
      }
    }  
  }
  
  return (
    <>
    <div className='footer-container'>
    <div className='icon-container'>

<div className='socials'>
 <motion.div
variants={bounce} 
animate='bouncer'
  className='icon'>
   <FaFacebook/>
  </motion.div>
</div>

<div className='socials'>
 <motion.div
variants={bounce} 
animate='bouncer'
  className='icon'>
   <FaInstagram/>
  </motion.div>
</div>     

<div className='socials'>
 <motion.div
variants={bounce} 
animate='bouncer'
  className='icon'>
   <FaTwitter/>
  </motion.div>
</div> 

</div>

<div className=' footer'>
      <h4 className='text'>All Right Reserved &copy; E&V Events... 2023</h4>
    </div>
    
    </div>
    </>
  )
}

export default Footer