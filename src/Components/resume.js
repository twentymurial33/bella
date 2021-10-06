import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import logo from "../me.jpg";
// import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="resume" col={12}>
            <div style={{ textAlign: "center" }}>
              <img className="logo" src={logo} alt="logo...." />
            </div>
            <h2>SKILLS</h2>
            <p>
              I use HTML & CSS every day, and I try to keep up with the latest
              features while maintaining graceful degradation. I use React as
              part of a develomement team developing a loan application app and
              periodically I’ve written other Node scripts to automate mundane
              tasks. I use Git for all of my programming work. I primarily use
              Visual Studio Code text editor for coding. Work and manage
              projects in cloud environments - mainly AWS and GCP.
            </p>
            <h2>EDUCATION</h2>
            <ul>TEXAS WOMANS UNIVERSITY| MBA</ul>
            <ul> TEXAS SOUTHERN UNIVERSITY| BA</ul>
            <ul> GW BOOTCAMP| WEB DEVELOPMENT</ul>
            <h2>EMPLOYMENT</h2>
            <ul>FREELANCE | LONETT | 2020 | Front-End Web Developer</ul>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
