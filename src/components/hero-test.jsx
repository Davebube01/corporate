import Carousel from "react-bootstrap/Carousel";
import { CarouselImg, CarouselImg1, CarouselImg2 } from "./Images";


function AppHeroTest() {
  return (
    <Carousel>
      <Carousel.Item>
          <CarouselImg/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <img src={CarouselImg} alt="" /> */}
        <CarouselImg1 />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        {/* <img src={CarouselImg} alt="" /> */}
        <CarouselImg2 />
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

export default AppHeroTest;
