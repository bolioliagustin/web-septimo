import React, { Component } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const boxVariant = {
    visible: { opacity: 1, scale:1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0}
};

const Box = ({num}) => {
    
    const control = useAnimation();
    const [ref, inView] = useInView();
    
    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);
    
    return (
        <motion.div
        ref={ref}
        variants={ boxVariant }
        className='box'
        initial= 'hidden'
        animate={control}
        >
            <h1>Box {num} </h1>
        </motion.div>
    );
};

export default class Boxes extends Component {
    render() {
        return (
            <div className='boxes'>
                <Box num={1}/>
                <Box num={2}/>
                <Box num={3}/>
            </div>
        );
    }
}   
