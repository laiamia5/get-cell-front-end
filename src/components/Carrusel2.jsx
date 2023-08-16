import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{width: '100%', maxHeight: '300px'}} src='https://marketplace.canva.com/EAFHvx67lpg/1/0/1600w/canva-portada-de-facebook-recortes-con-frase-simple-color-marr%C3%B3n-tXDCYFde8is.jpg' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width: '100%', maxHeight: '300px'}} src='https://media.timeout.com/images/105766961/750/422/image.jpg' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width: '100%', maxHeight: '300px'}} src='https://marketplace.canva.com/EAFHvx67lpg/1/0/1600w/canva-portada-de-facebook-recortes-con-frase-simple-color-marr%C3%B3n-tXDCYFde8is.jpg' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;