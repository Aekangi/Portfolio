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
      <a
        href="https://docs.google.com/document/d/e/2PACX-1vSxVMoCCnxqqQ-RyxbKR_JNQkZ-T4pIwpPGKJ8-MUW8EHCGbmUYk07hREEzzj4mLIL6LdQRwlUAWiws/pub" download="Aekangi-Patel_Resume"
      >
        Resume
      </a>
    </div>
  );
};

export default Header;
