/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/mosaic.svg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a software developer with an eye for details. My previous experience as a baker has taught me how to appreciate every component that goes into making a masterpiece — and how to do that while working collaboratively with others in fast-paced, deadline-driven environments. Coder by day and baker by night, I am excited to contribute my skills in team management, designing, and coding with my adaptability, creativity, and people skills to help companies solve problems and achieve their goals.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Software Developer",
  "Coder",
  "Designer",
  "Programmer",
  "Architect",
  "Engineer",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = "Software is easy to make, except when you want it to do something new. And then, of course, there is a corollary: The only software that's worth making is software that does something new. Scott Rossenberg";
const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgb(202, 193, 223)",
          // opacity: ".9",
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
