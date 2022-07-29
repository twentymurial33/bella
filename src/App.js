import React, { Component } from "react";
import "./App.css";
import { Layout, Header } from "react-mdl";
import Main from "./Components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="Murial's-portfolio">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "orange" }} to="/">
                MURIAL'S PORTFOLIO
              </Link>
            }
            scroll
          ></Header>
        </Layout>
        <Main />
      </div>
    );
  }
}

export default App;
