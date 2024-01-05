import React from 'react'

import { motion } from 'framer-motion'; 

import { styles } from '../styles';
import { services } from '../constants'; 

import { fadeIn, textVariant } from '../utils/motion';

const Servicecard = ( { index, title, icon } ) => {
return (
        <p> {title} </p>
  )
  }
const About = () => {
  return (
    <motion.div variants={textVariant}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
      <motion.p 
      variants = {fadeIn("", "", 0.1, 1)}
      className= "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a skilled software developer with relevant experience in Javascript and Typescript. 
        I also have expertise in frameworks like Node.js and Three.js. I'm a quick learner 
        and collaborate closely with clients to create scalable, effective, and user-friendly 
        solutions that solve real-world problems. Let's work together to bring your ideas to LIFE!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map ((service, index) => (
          <Servicecard  key = {service.title} index= {index} {...service} />
        ))} 
      </div>
    </motion.div>

    
  );
}
export default About