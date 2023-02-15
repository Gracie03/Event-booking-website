import React from 'react';
import {  FaAngleRight } from "react-icons/fa";
import img2 from './image/img2.jpg';

const About = () => {
  return (
   <>
    <div id='about' className='section about'>
    <div className='head abt'>
         <div className='arrow'><FaAngleRight/></div><h3 className='head title'>All About us</h3>
        </div>
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