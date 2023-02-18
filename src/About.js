import React from 'react';
import {  FaAngleRight } from "react-icons/fa";
import img2 from './image/img2.jpg';
import {motion} from 'framer-motion';


const About = () => {

  const entry = {
    start:{
      x:'-200vw', opacity:0
    },
    stop:{
      x: ['-200vw','0'], opacity:1,
      transition:{ ease:'easeIn', duration:0.8, delay:0.2, type:'spring', stiffness:200,
    }
    },
   }
  

  return (
   <>
    <div id='about' className='section about'>
    <motion.div
     variants={entry}
     initial=''
     animate =''
    className='head abt'>
         <div className='arrow'><FaAngleRight/></div><h3 className='head '>All About us</h3>
    </motion.div>
      <div className='about-container'>
        <div className='photo ab'><img src={img2} alt='home' className='img'/></div>
       <div className='article'>
        <p>Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
        noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
        noster oportere, elitr impetus nonumes ne vel. Omnium persecuti us noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
        noster oportere, elitr onumes ne vel. Omnium persecuti  <span className='span'>Read More</span>
        </p>
       </div>
      </div>  
    </div>
   </>
  )
}




export default About