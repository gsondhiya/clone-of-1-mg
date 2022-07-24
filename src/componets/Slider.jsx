
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Header1,{Header2,Header3} from './Header';
function Slider() {
    return (
      <>
      <div><Header1/></div> 
        <Header2/>
        <Header3/>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://onemg.gumlet.io/c_fit,f_auto,h_250,q_auto,a_ignore,w_1013/ggfflamt5rfkfkrz0pur.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://onemg.gumlet.io/c_fit,f_auto,h_250,q_auto,a_ignore,w_1013/viblfb7cmvmc5mloffch.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://onemg.gumlet.io/c_fit,f_auto,h_250,q_auto,a_ignore,w_1013/gcm7ktdbjop9hggjekuo.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    );
  }
  
  export default Slider;