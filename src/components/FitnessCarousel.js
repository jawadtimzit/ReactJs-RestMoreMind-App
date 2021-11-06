import Carousel from 'react-bootstrap-carousel';
import React, { Component } from 'react';
import fitness1 from '../fitness1.jpg';
import fitness2 from '../fitness2.jpg';
import fitness3 from '../fitness3.jpg';

export default class FitnessCarousel extends Component {
    render() {
        return (
            <div>
           <h1> Hi This is a test</h1>
           <Carousel variant="dark" style={{maxHeight:300}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fitness1}//"holder.js/800x400?text=First slide&bg=f5f5f5"
      alt="First slide"
      style={{maxHeight:500,maxWidth:1080}}
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fitness2}//"holder.js/800x400?text=Second slide&bg=eee"
      alt="Second slide"
      style={{maxHeight:500,maxWidth:1080}}
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fitness3}//"holder.js/800x400?text=Third slide&bg=e5e5e5"
      alt="Third slide"
      style={{maxHeight:500,maxWidth:1080}}
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        )
    }
}