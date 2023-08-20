import Carousel from 'react-bootstrap/Carousel';
import carru1 from '../tools/imgs/carru.png'
import carru2 from '../tools/imgs/carru2.png'
import carru3 from '../tools/imgs/carru3.png'


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{width: '100%', maxHeight: '300px'}} src={carru1} text="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width: '100%', maxHeight: '300px'}} src={carru2} text="Second slide" />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width: '100%', maxHeight: '300px'}} src={carru3} text="Third slide" />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;