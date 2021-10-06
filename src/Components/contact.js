import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import social1 from "../github.png";
import social2 from "../netlify.png";
import social3 from "../gmail.png";
import social from "../linkedin.png";

class about extends Component {
  render() {
    return (
      <div className="contact-body">
        <img
          className="social1"
          src={social1}
          alt="logo...."
          a
          href="https://github.com/twentymurial33"
        />
        <img className="social2" src={social2} alt="logo...." />
        <img className="social3" src={social3} alt="logo...." />
        <img className="social" src={social} alt="logo...." />
      </div>
    );
  }
}

export default about;
