//src/A11y Improvements.jsx

import { useState } from 'react'
import React from 'react'
import styles from './Styles'
import {
  handleHomeClick,
  handleAboutClick,
  handleContactClick,
  handleContinueClick,
} from './constants'
import reactLogo from './assets/react.svg'

export default function A11y() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main style={styles.container}>
      <header style={styles.header}>Welcome to My Page</header>

      <section style={styles.content}>
        <nav style={styles.nav}>
          <button
            onClick={handleHomeClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={
              isHovered
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
          >
            Home
          </button>

          <button
            onClick={handleAboutClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={
              isHovered
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
          >
            About
          </button>

          <button
            onClick={handleContactClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={
              isHovered
                ? { ...styles.button, ...styles.buttonHover }
                : styles.button
            }
          >
            Contact
          </button>
        </nav>
      </section>

      <section style={styles.content}>
        <header style={styles.header}>Important Info</header>
      </section>

      <section style={styles.content}>
        <img src={reactLogo} style={styles.image} alt="React Logo" />

        <p>Click the box below to continue.</p>

        <button
          onClick={handleContinueClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={
            isHovered
              ? { ...styles.button, ...styles.buttonHover }
              : styles.button
          }
        >
          Continue
        </button>
      </section>

      <footer style={styles.footer}>© 2026 Example Site</footer>
    </main>
  )
}
