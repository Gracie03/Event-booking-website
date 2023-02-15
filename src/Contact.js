import React from 'react';
import { FaPhone,FaInstagram, FaEnvelope,FaAngleRight, FaMapMarkerAlt} from "react-icons/fa";
import {motion} from 'framer-motion';

const Contact = () => {

  const bounce = {
    bouncer:{
     scale:1.2,
      transition:{
        repeatType:'mirror',
       repeat:Infinity,duration:5, ease:'easeOut'
      }
    }  
  }

 

  return (
    <div id='contact' className='section contact'>
       <div className='head'>
       <div className='arrow'><FaAngleRight/></div><h3 className='head title'>Get in touch with us</h3>
        </div>
      <div className='contact-container'>
        <div className='form'>
          <form>
            <div className='name'>
              <label>Name</label>
              <input className='input'/>
            </div>
           <div className='email'>
              <label>Email</label>
              <input className='input'/>
            </div>
            <div className='message-label'>
              <label>Message</label>
              <textarea className='message'></textarea>
            </div>
            <button className='btn submit'>Send Message</button>
          </form>
        </div>

        <div className='icon-container'>

         <div className='socials'>
          <motion.div
          variants={bounce} 
          animate='bouncer'
           className='icon'>
            <FaEnvelope/>
           </motion.div>
           Email
         </div>

         <div className='socials'>
          <motion.div
         variants={bounce} 
         animate='bouncer'
           className='icon'>
            <FaPhone/>
           </motion.div>
           000000000
         </div>

         <div className='socials'>
          <motion.div
         variants={bounce} 
         animate='bouncer'
           className='icon'>
            <FaInstagram/>
           </motion.div>
            Instagram
         </div>     

         <div className='socials'>
          <motion.div
         variants={bounce} 
         animate='bouncer'
           className='icon'>
            <FaMapMarkerAlt/>
           </motion.div>
           Address
         </div> 
          
        </div>
      </div>
    </div>
  )
}

export default Contact