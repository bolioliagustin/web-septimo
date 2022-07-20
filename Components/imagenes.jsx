import React from "react";
import axios from "axios";
import { useState } from "react";
import Gallery from "react-photo-gallery";

const apiURL = "https://google-photos-album-demo2.glitch.me/H1wfvgEogBVb4yRW7";

export default function imagenes() {
  const [images, updateimages] = useState([]);

  axios.get(apiURL).then(function (response) {
    const images = response.data;
    console.log(images);
    updateimages(images);
  });

  return (
    <div className="container center">
      {images.map((allimages) => (
        <img src={allimages} alt="" referrerpolicy="no-referrer" />
      ))}
    </div>
  );
}
