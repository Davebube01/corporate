import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact Us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your full name"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                placeholder="enter your contact address"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="ENter your contact message"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>

      <div className="google-map">
        <iframe
          title="my-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.96798479673!2d2.264462680524582!3d48.85882536951348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sng!4v1711557099080!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Container fluid>
        <div className="contact-info">
            <ul>
                <li>
                    <i className="fas fa-envelope"></i>
                    davebube@gmail.com
                </li>
                <li>
                    <i className="fas fa-phone"></i>
                    +234 000 000 0000
                </li>
                <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Paris, France
                </li>
            </ul>
        </div>
      </Container>
    </section>
  );
}
