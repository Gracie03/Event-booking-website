import { useState } from "react"; 
import { FaBars } from "react-icons/fa";
import {motion} from 'framer-motion';



const Nav = () => {

    const [showlinks,setshowlinks] = useState(false);

    const links = {
        start:{
        scale:1.3,
        originx:0,
        transition:{  duration:0.2, type:'spring', stiffness:300
         }
        },
      }

      const buttons = {
        start:{
        scale:1.1,
        transition:{ ease:'easeIn', duration:0.2,
         }
        },
      }
    

  return (
  <nav>
  
    <div className='logo'>E&V</div>
    <motion.button
    variants={buttons}
    whileHover='start'
    className='nav-toggle lines' onClick={()=>setshowlinks(!showlinks)}>
        <FaBars/>
    </motion.button>

    <motion.div
    variants={links}
    animation ='start'
    className={`${showlinks?'nav-links show-links' : 'nav-links'}`} >
        <ul>
            <motion.li
            variants={links}
            whileHover ='start'
            >
                <a href='#home'>home</a>
            </motion.li>
            <motion.li
            variants={links}
            whileHover ='start'
            >
                <a href='#about'>About</a>
            </motion.li>
            <motion.li
            variants={links}
            whileHover ='start'
            >
                <a href='#service'>Services</a>
            </motion.li>
            <motion.li
            variants={links}
            whileHover ='start'
            >
                <a href='#work'>Work</a>
            </motion.li>
            <motion.li
            variants={links}
            whileHover ='start'
            >
                <a href='#contact'>Contact</a>
            </motion.li>
        </ul>

    </motion.div>
   
    
   
  </nav>
  )
}

export default Nav