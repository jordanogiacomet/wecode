import React, { useState } from 'react';
import imgInicio from "..//..//assets/img/Banner-home-principal-1.png"
import imgMeio from "..//..//assets/img/Banner-home-principal-2.png"
import imgFim from "..//..//assets/img/Banner-home-principal-3.png"
import style from "../Carousel/Slides.module.scss"
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';


function CarouselFadeExample() {
  return (
    <Container fluid className='m-0 p-0'>
        <Carousel fade controls={false} interval={2000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgInicio}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgMeio}
          alt="Second slide"
        />

     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgFim}
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
    </Container>
    
  );
}

export default CarouselFadeExample;

