import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

export default class carousel extends Component {
  render() {
    return (
        <Carousel fade>
  <Carousel.Item interval={2000}>
    <img
      className="image-carousel"
      src= '/carousel1.jpg'
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="image-carousel"
      src='/carousel2.jpg'
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="image-carousel"
      src='/carousel3.jpg'
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    )
  }
}