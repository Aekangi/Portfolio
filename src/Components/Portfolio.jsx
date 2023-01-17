/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computercoding.jpeg";
import image1 from "../images/computer1.jpeg";
import image2 from "../images/code.jpeg";

const imageAltText = "computer code";
const image1 = "women on computer";
const image2 = "coding image"

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "FitNow",
    description: "It's time to take control of your health today. After a hard day at work, the last thing you want to think about is what to eat and which exercises to follow. Well, here on FitNow, we've got you covered! FitNow is designed for those individuals that would like to get fit through exercises and diet plans. FitNow has well designed dinner plans for each day of the week. Think no more and start scrolling through the app to see what works for you!",
    description2: "BUILT WITH: POSTGRESQL, EXPRESS, REACT, NODE, CSS",
    description3: "",
    url: "https://main.d1pe52f8thbmyf.amplifyapp.com/",
    gitHub: "https://github.com/Aekangi/FitNow-FrontEnd",
  },
  {
    title: "Food Diary",
    description:
      "Food Diary is an application designed to provide food recipes and mocktail recipes for everyday dinners. This app allows a user to view, add, update, and delete recipes. This project was solely built by myself. I understand that there are so many food apps already out there. What sets this app apart from the other apps is the fact that it's a one stop all app. Unlike other apps that only show recipes for either the food or drinks, this app lets you view both. Also the convenience of this app is that they are divided into their own sections. One tab leads you to food recipes while the other tab takes the user to mocktail concoctions. This app was designed to be family-friendly so none of the recipe use alcohol. I hope u enjoy the app!",
    description2: "BUILT WITH: MONGOOSE, EXPRESS, REACT, NODE, CSS",
    description3: "",
    url: "https://fooddiary82.herokuapp.com/",
    gitHub: "https://github.com/Aekangi/FoodDiaries",
  },
  {
    title: "BuddyUp",
    description: "Was there any activity that you wanted to do but just didn't have anyone to go with? Well, BuddyUp was specifically tailored for those moments. My team and I built this app from scratch for the sole purpose of eliminating that feeling from a persons life. The purpose of the app is to see an activity, and match with other users that are interested in the same activity. Once there is a match, all of the contact information will be available for the user. In addition to viewing all of the activities, the user has the option to also add, update or delete an event they added. Enjoy the app!",
    description2: "BUILT WITH: POSTGRESQL, EXPRESS, REACT, NODE, CSS",
    description3: "",
    url: "https://buddy-match-up.herokuapp.com/",
    gitHub: "https://github.com/kalenluciano/buddy-up-frontend",
  },
  {
    title: "RAWG",
    description: "RAWG is a website that's inteded for gamers to come and explore game genres they prefer and find new games within that genre to explore. Through the app, there is a description for each game the user wishes to find out more about. The app was built with an API from the RAWG website itself. Enjoy searching!",
    description2: "BUILT WITH: VUE.JS, API, JAVASCRIPT, CSS",
    description3: "",
    url: "https://main.d2ujbqwsmf57lw.amplifyapp.com/",
    gitHub: "https://github.com/Aekangi/RAWG",
  },
];

const Portfolio = () => {
  return (
    <div className="portfoliobgrd">
      <section className="light" id="portfolio">
        <h2>Portfolio</h2>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
          <div style={{ maxWidth: "40%", alignSelf: "center" }}>
            <img
              src={image}
              style={{ height: "90%", width: "100%", objectFit: "cover", margin: "20px", borderRadius: "20px" }}
              alt={imageAltText}
              />
              <img
              src={image1}
              style={{ height: "90%", width: "100%", objectFit: "cover", margin: "20px", borderRadius: "20px" }}
              alt={image1}
              />
              <img
              src={image2}
              style={{ height: "90%", width: "100%", objectFit: "cover", margin: "20px", borderRadius: "20px" }}
              alt={image2}
              />
          </div>
          <div className="container">
            {projectList.map((project) => (
              <div className="box" key={project.title}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
                <p className="small">{project.description}</p>
                <p className="small">{project.description2}</p>
                <p className="small">{project.description3}</p>
                <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>Github Repository</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;