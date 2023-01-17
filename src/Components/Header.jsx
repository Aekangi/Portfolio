/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgbA(146, 129, 185, .5)",
        padding: "1rem",
        top: 0,
        width: "100vw",
        zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Header;
