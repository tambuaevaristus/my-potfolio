import React from "react";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            height="600"
            src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
          <img
           width="40%"
           src="/asserts/ev5-removebg.png"
           alt="Third slide"
         />
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            height="600"
            src="/asserts/banner1.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  interval={4000}>
          <img
            className="d-block w-100 align-end"
            height="600"
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            alt="Third slide"
          />
          <Carousel.Caption  >
          <img
           
            src="/asserts/pic1-removebg-preview.png"
            alt="Third slide"
          />
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
