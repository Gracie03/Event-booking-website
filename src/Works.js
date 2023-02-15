import React from 'react';
import {  FaAngleRight,FaCheckSquare,FaFileSignature,FaMoneyCheckAlt, FaClock } from "react-icons/fa";
import {motion} from 'framer-motion';


const Works = () => {

  const buttons = {
    start:{
    scale:1.1,
    transition:{ ease:'easeIn', duration:0.2,
     }
    },
  }

  return (
    <div id='work' className='section work'>
      <div className='head'>
      <div className='arrow'><FaAngleRight/></div><h3 className='head'>Why choose us ?</h3>
        </div>
      <div className='work-container'>
        <div className='cards-container'>
        <motion.div
        variants={buttons}
        whileHover='start'
         className='card wk'>
        <div className='head'><div className='icon'><FaCheckSquare/></div><h4 className='card-name'>Client Satisfaction</h4></div>
            <p>Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
            </p>
          </motion.div>
          <motion.div
           variants={buttons}
           whileHover='start'
            className='card wk'>
          <div className='head '><div className='icon'><FaFileSignature/></div><h4 className='card-name'>Accountabilty</h4></div>
            <p>Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
            </p>
          </motion.div>
          <motion.div
           variants={buttons}
           whileHover='start'
            className='card wk'>
          <div className='head'><div className='icon'><FaMoneyCheckAlt/></div><h4 className='card-name'>Cost effective</h4></div>
            <p>Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
            </p>
          </motion.div>
          <motion.div
           variants={buttons}
           whileHover='start'
            className='card wk'>
          <div className='head'><div className='icon'><FaClock/></div><h4 className='card-name'>Effective timing</h4></div>
            <p>Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Works