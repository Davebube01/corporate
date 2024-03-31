import Carousel from "react-bootstrap/Carousel";

import hero1 from "../assets/img/img-hero1.jpg";
import hero2 from "../assets/img/img-hero2.jpg";
import hero3 from "../assets/img/img-hero3.jpg";

import { CarouselImg, CarouselImg1, CarouselImg2 } from "./Images";

// creating variables for the content of the hero page
var heroData = [
  {
    id: 1,
    image: hero1,
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: hero2,
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: hero3,
    title: "Enjoy the Difference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.twitter.com",
  },
];

// function to display hero page contents
export default function AppHero() {
  return (
    <>
      <section id="home" className="hero-block">
        <Carousel>
          {heroData.map((hero) => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                {/* < CarouselImg/> */}
                <Carousel.Caption>
                  <h3>{hero.title}</h3>
                  <p>{hero.description}</p>
                  <a className="btn btn-primary" href={hero.link}>
                    Learn More
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </>
  );
}
