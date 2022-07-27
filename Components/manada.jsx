import React from "react";
import { Parallax } from "react-parallax";

export default function manada() {
  return (
    <>
      <div className="text-center title-historia">
        <Parallax 
        className="carousel-responsive1" 
        bgImage="/carousel1.jpg" 
        bgImageAlt="Scout"
        strength={300}
        />
      </div>
      <div className="center mt-4">
        <h1 className="bold title text-center">Manada</h1>
        <div className="line" />
      </div>
      <div className="historia-container mb-4">
      <div className="container-lg center historia-text">
        <div className="medium textarea mt-1 center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          nesciunt ipsa totam omnis impedit. Unde, nisi. Aperiam quos quas unde
          adipisci reiciendis, recusandae aspernatur neque labore facilis quam
          quaerat soluta incidunt dolores suscipit impedit amet alias tempora
          similique sapiente non temporibus, est harum pariatur accusantium!
          Voluptate illum sapiente laudantium animi repellendus minus tenetur
          reprehenderit. Possimus unde explicabo, quisquam laudantium libero.
          sit.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          nesciunt ipsa totam omnis impedit. Unde, nisi. Aperiam quos quas unde
          adipisci reiciendis, recusandae aspernatur neque labore facilis quam
          quaerat soluta incidunt dolores suscipit impedit amet alias tempora
          similique sapiente non temporibus, est harum pariatur accusantium!
          Voluptate illum sapiente laudantium animi repellendus minus tenetur
          reprehenderit. Possimus unde explicabo, quisquam laudantium libero et
          vel omnis, rerum quam reiciendis animi architecto.
        </div>
        <div className="img-historia">
        <img 
        className="img" 
        src="/historia2.png" 
        alt="Baden-Powell"/>
      </div> 
      </div>
      </div>
    </>
  );
}
