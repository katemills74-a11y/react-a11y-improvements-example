//src/A11y Improvements.jsx

import { useState } from "react";
import React from "react";
import styles from "./Styles";
import { handleHomeClick, handleAboutClick, handleContactClick, handleContinueClick } from "./constants";
import reactLogo from "./assets/react.svg";

export default function A11y() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <main style={styles.container}>
      <header style={styles.header}>
        Welcome to My Page
      </header>
    
    <section style={styles.content}>
      <nav style={styles.nav}>
        <button
          onClick={handleHomeClick}
          aria-label="Home"
          onMouseEnter={() => setHoveredButton("home")}
          onMouseLeave={() => setHoveredButton(null)}
          style={hoveredButton === "home" ? { ...styles.button, ...styles.buttonHover } : styles.button}
        >
            Home
        </button>
        
        <button 
          onClick={handleAboutClick}
          aria-label="About section"
          onMouseEnter={() => setHoveredButton("about")}
          onMouseLeave={() => setHoveredButton(null)}
          style={hoveredButton === "about" ? { ...styles.button, ...styles.buttonHover } : styles.button}     
        >
            About
        </button>

        <button 
          onClick={handleContactClick}
          aria-label="Contact information"   
          onMouseEnter={() => setHoveredButton("contact")}
          onMouseLeave={() => setHoveredButton(null)}
          style={hoveredButton === "contact" ? { ...styles.button, ...styles.buttonHover } : styles.button}          
        >
            Contact
        </button>
      </nav>
    </section>

      <section style={styles.content}>
        <header style={styles.header}>
          Important Info
        </header>
      </section>

      <section
        style={styles.content}>
          <img src={reactLogo}
            style={styles.image}
          />
        
        <p>
          Click the box below to continue.
        </p>

        <button
          onClick={handleContinueClick}
          aria-label="Continue to next step"
          onMouseEnter={() => setHoveredButton("continue")}
          onMouseLeave={() => setHoveredButton(null)}
          style={hoveredButton === "continue" ? { ...styles.button, ...styles.buttonHover } : styles.button}
        >
          Continue
        </button>
      </section>

      <footer
        style={styles.footer}>
          © 2026 Example Site
      </footer>

    </main>
  );
}
