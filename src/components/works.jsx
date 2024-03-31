import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";


export default function AppWorks() {
  const worksData = [
    {
      id: 1,
      image: img2,
      title: "Lonely Path",
      subtitle: "Web Design",
    },
    {
      id: 2,
      image: img3,
      title: "Lonely Path",
      subtitle: "Web Design",
    },
    {
      id: 3,
      image: img4,
      title: "The Difference",
      subtitle: "Web Design",
    },
    {
      id: 4,
      image: img5,
      title: "Nature Patterns",
      subtitle: "Branding",
    },
    {
      id: 5,
      image: img6,
      title: "The Difference",
      subtitle: "Photography",
    },
    {
      id: 6,
      image: img7,
      title: "Winter Sonata",
      subtitle: "Web Design",
    },
    {
      id: 7,
      image: img8,
      title: "Lonely Path",
      subtitle: "Branding",
    },
    {
      id: 8,
      image: img9,
      title: "Appreciation",
      subtitle: "Photography",
    },
    {
      id: 9,
      image: img2,
      title: "Happy Days",
      subtitle: "Web Design",
    },
  ];

  return (
    <>
      <section id="works" className="block works-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Our Works</h2>
            <div className="subtitle">Our awesome works</div>
          </div>
          <Row className="portfoliolist">
            {worksData.map((works) => {
              return (
                <Col sm={4} className="" key={works.id}>
                  <div className="portfolio-wrapper">
                    <Image src={works.image} thumbnail />
                    <div className="label text-center">
                      <h3>{works.title}</h3>
                      <p>{works.subtitle}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
}
