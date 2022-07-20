import React, { Component, useEffect } from "react";
import { Parallax } from "react-parallax";
import Form from "./form";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const formVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function parallax() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <Parallax
      className="parallax"
      bgImage="/parallax1.jpg"
      bgImageAlt="Scout"
      strength={200}
      blur={2}
    >
      <div 
      style={{ height: 700 }}>
        <div class="row">
            <motion.div
              ref={ref}
              variants={formVariant}
              initial= 'hidden'
              animate={control}
              className="div-form-parallax col-md-5">
            <Form/>
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
}
