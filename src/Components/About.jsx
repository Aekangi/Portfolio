
import React from "react";

import image from "../images/mosaic.svg";

const imageAltText = "purple and blue abstract background";

const description =
  "I am a software developer with an eye for details. My previous experience as a baker has taught me how to appreciate every component that goes into making a masterpiece — and how to do that while working collaboratively with others in fast-paced, deadline-driven environments. Coder by day and baker by night, I am excited to contribute my skills in team management, designing, and coding with my adaptability, creativity, and people skills to help companies solve problems and achieve their goals.";

const skillsList = [
  "JavaScript",
  "Python",
  "HTML5",
  "React",
  "Vue",
  "SQL",
];

const detailOrQuote = "Software is easy to make, except when you want it to do something new. And then, of course, there is a corollary: The only software that's worth making is software that does something new. Scott Rossenberg";
const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgb(202, 193, 223)",
          opacity: ".9",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
