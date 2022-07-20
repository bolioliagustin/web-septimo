import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const cardVariant = {
    visible: { opacity: 1, scale:1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0}
};

export default function card(props) {
    
    const control = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);

    return (
        <motion.div
        className='md-2 text-center' 
        ref={ref}
        variants={ cardVariant }
        initial= 'hidden'
        animate={control}
        >
          <div class="card-img-top">
            <img 
            src={props.imageSource}/>
          </div>
          <div class='card-body'>
            <h5 class='card-title bold'>{props.title}</h5>
            <p class='card-text extralight'>{props.text}</p>
            </div>
            <div class='card-button'>
            <a href={props.href} class="btn btn_primary">Mas informacion</a>
            </div>
      </motion.div>
    )
  }