import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImgOne } from "./Images";

export default function AppAbout() {
  const html = 90;
  const responsive = 75;
  const photoshop = 80;
  return (
    <section id="About" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <ImgOne />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis temporibus dolor explicabo corporis esse nulla odio
              eligendi necessitatibus accusantium, veritatis deserunt quibusdam
              quae!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
              deleniti consectetur non commodi illum. Cum nam natus eveniet
              ipsa! Facere, obcaecati esse animi recusandae est magni iusto
              dolorum id! 
            </p>
            <div className="progress-block">
                <h4>HTML / CSS / JAVASCRIPT</h4>
                <ProgressBar now={html} label={`${html}%`} />;
            </div>
            <div className="progress-block">
                <h4>RESPONSIVE</h4>
                <ProgressBar now={responsive} label={`${responsive}%`} />;
            </div>
            <div className="progress-block">
                <h4>PHOTOSHOP</h4>
                <ProgressBar now={photoshop} label={`${photoshop}%`} />;
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
