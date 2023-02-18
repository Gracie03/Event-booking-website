import React from 'react';
import { FaAngleRight} from "react-icons/fa";
import {motion} from 'framer-motion';
import { useState,useEffect } from 'react';

const Contact = () => {
 
  const [error,seterror] = useState('error setting');
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [message,setmessage] = useState('');

  const handlechange = ()=>{

  }

  const handleclick = ()=>{

  }
  


  return (
    <div id='contact' className='section contact'>
       <div className='head'>
       <div className='arrow'><FaAngleRight/></div><h3 className='head '>Get in touch with us</h3>
        </div>
      <div className='contact-container'>
        <div className='form'>

        <span className='error'>{error}</span>

          <form>
            <div className='name'>
              <label>Name</label> 
              <input className='input' placeholder='Enter Name'  name='name' value={name} onChange={handlechange} />
            </div>
           <div className='email' >
              <label>Email</label>
              <input className='input' placeholder='example@email.com' name='email' value={email} onChange={handlechange}/>
            </div>
            <div className='message-label' >
              <label>Message</label>
              <textarea className='message' placeholder='enter message'  name='email' value={message} onChange={handlechange}></textarea>
            </div>
            <button className='btn submit'>Send Message</button>
          </form>
        </div>

       
      </div>
    </div>
  )
}

export default Contact