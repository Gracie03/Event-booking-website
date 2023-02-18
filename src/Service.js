import React from 'react';
import { FaAngleRight, FaRegAddressBook,FaHouzz,FaUserAlt,FaFemale } from "react-icons/fa";
import {motion} from 'framer-motion';


const Service = () => {

  const buttons = {
    start:{
    scale:1.1,
    transition:{ ease:'easeIn', duration:0.2,
     }
    },
  }

  return (
    <div id='service' className='section service'>
      <div className='head'>
      <div className='arrow'><FaAngleRight/></div><h3 className='head'>What we offer</h3>
        </div>
      <div className='service-container'>
        <div className='cards-container'>
          <motion.div
          variants={buttons}
          whileHover='start'
           className='card serv'>
            <div className='head'><div className='icon'><FaRegAddressBook/></div><h4 className='card-name'>Event planning</h4></div>
            <p>Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
            
            </p>
          </motion.div>
          <motion.div
          variants={buttons}
          whileHover='start'
           className='card serv'>
          <div className='head'><div className='icon'><FaHouzz/></div><h4 className='card-name'>Hall Rental</h4></div>
            <p>Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
             
            </p>
          </motion.div>
          <motion.div
          variants={buttons}
          whileHover='start'
           className='card serv'>
          <div className='head'><div className='icon'><FaUserAlt/></div><h4 className='card-name'>Security Personnel</h4></div>
            <p>Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
             
            </p>
          </motion.div>
          <motion.div
          variants={buttons}
          whileHover='start'
           className='card serv'>
          <div className='head '><div className='icon'><FaFemale/></div><h4 className='card-name'>Ushering Service</h4></div>
            <p>Lorem ipsum dolor sit amet, mea elitr assentior ex. Menandri pertinax    quo ut, fastidii volutpat et mel. Nisl singulis facilisis at quo. Et has ridens noster oportere, elitr impetus nonumes ne vel. Omnium persecuti usu id. In ludus eripuit cum. At saepe dolore nec, sit an sanctus docendi
            
            </p>
          </motion.div>
        </div>
        
      </div>
      <div className='stats'>
          <div className='stat-card'>
            <h4 className='card-name'>Completed Jobs</h4>
            <span>300+</span>
          </div>
          <div className='stat-card'>
            <h4 className='card-name'>Clients remarks</h4>
            <span>200+</span>
          </div>
          <div className='stat-card'>
            <h4 className='card-name'>Bookings</h4>
            <span>50+</span>
          </div>
        </div>
    </div>
  )
}

export default Service