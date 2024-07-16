import React from "react";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      Coded by{" "}
      <a href="https://github.com/wwwavvves" target="_blank" rel="noreferrer">
        Diana Guerreiro
      </a>
      , open-sourced on{" "}
      <a
        href="https://github.com/wwwavvves/react-weather-project"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>{" "}
      and hosted on{" "}
      <a
        href="https://visionary-sunshine-5428cb.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netlify
      </a>
    </footer>
  );
}
