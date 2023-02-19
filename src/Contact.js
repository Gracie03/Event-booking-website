import React from 'react';
import { FaAngleRight} from "react-icons/fa";
import { useState,useEffect} from 'react';

const Contact = () => {

 
  const [error,seterror] = useState('');
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [message,setmessage] = useState('');

  useEffect(()=>{
    setTimeout((e)=>{
     seterror('')
    },5000)
   },[error])

  const handleclick = (e)=>{
    setname('');
    setemail('');
    setmessage('');

    if(name === ''){
      seterror('please enter name')
    }
    



   

    e.preventDefault();
   console.log(`hello`);
  }
  


  return (
    <div id='contact' className='section contact'>
       <div className='head'>
       <div className='arrow'><FaAngleRight/></div><h3 className='head '>Get in touch with us</h3>
        </div>
      <div className='contact-container'>
        <div className='form'>

        <span className='error'>{error}</span>

          <form  onSubmit={handleclick} >
            <div className='name'>
              <label>Name</label> 
              <input className='input' type='name' placeholder='Enter name '  name='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
            </div>
           <div className='email' >
              <label>Email</label>
              <input className='input' type='email' placeholder='example@email.com' name='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className='message-label' >
              <label>Message</label>
              <textarea className='message' type='message' placeholder='enter message'  name='email' value={message} onChange={(e)=>{setmessage(e.target.value)}}></textarea>
            </div>
            <button type='submit' value='submit' className='btn submit'>Send Message</button>
          </form>
        </div>

       
      </div>
    </div>
  )
}

export default Contact