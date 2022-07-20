import React from "react";
import {Cards2} from '../Components/cards'

export default function nosotros() {
  return (
    <>
      <div className="text-center title-historia">
        <img
          className="carousel-responsive1"
          src="/carousel3.jpg"
          alt="Scouts"
        />
      </div>
      <div className="center mt-4">
        <div className="bold title text-center title-center">
          Nosotros
          <div className="line" />
        </div>
      </div>
      <div className="nosotros-container">
        <Cards2/>
      </div>
    </>
  );
}
