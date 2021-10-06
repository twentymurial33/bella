import React from "react";
import Typed from "react-typed";
import logo from "../me.jpg";
import social from "../linkedin.png";

const Landing = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        {/* <h1>React Developer</h1> */}
        <Typed
          className="typed-text"
          strings={[
            "React Developer",
            "Cloud Computing",
            "Technical Program Manager",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <img className="logo" src={logo} alt="logo...." />

        <a
          href="https://www.linkedin.com/in/murial-anindo/"
          className="btn-main-offer"
        >
          {" "}
          <img
            className="social"
            src={social}
            alt="logo...."
            // style={{ width: "90px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Landing;
