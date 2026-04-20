import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h3>Welcome to My Page</h3>
      </div>

      <div className="nav">
        <p onClick={() => alert("Home clicked")}>Home</p>
        <p onClick={() => alert("About clicked")}>About</p>
        <p onClick={() => alert("Contact clicked")}>Contact</p>
      </div>

      <div className="content">
        <h5>Important Info</h5>
        <img src="https://via.placeholder.com/150" />
        <p>
          Click the box below to continue.
        </p>

        <div
          className="fake-button"
          onClick={() => alert("Continue")}
        >
          Continue
        </div>
      </div>

      <div className="footer">
        <p>© 2024 Example Site</p>
      </div>
    </div>
  );
}
