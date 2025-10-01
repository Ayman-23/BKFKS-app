import React from "react";
import { Carousel } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">About Us</h2>
      <p className="about-text">
        Bangladesh KickFighter Karate Schoole was founded with a vision to promote 
        discipline, respect, and strength through martial arts training. Over the years, 
        our dojo has trained hundreds of students, from beginners to black belts, helping 
        them develop confidence, self-defense skills, and a strong spirit. Our instructors 
        are highly experienced and dedicated to spreading the true essence of Karate.
      </p>

      <Carousel className="about-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/02/63/36/15/360_F_263361556_Bo3b3BoapDzFfYVdXSiFbKgqwkqbYklO.jpg"
            alt="Karate Training"
          />
          <Carousel.Caption>
            <h5>Discipline & Strength</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/11/29/09/32/martial-arts-1868500_960_720.jpg"
            alt="Karate Group"
          />
          <Carousel.Caption>
            <h5>Unity & Team Spirit</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/08/01/00/17/karate-2567188_960_720.jpg"
            alt="Karate Kids"
          />
          <Carousel.Caption>
            <h5>Future Champions</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default About;
