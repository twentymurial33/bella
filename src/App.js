import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer } from "react-mdl";
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
          >
            <Navigation>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                MURIAL'S PORTFOLIO
              </Link>
            }
          >
            <Navigation>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Drawer>
        </Layout>
        <Main />
      </div>
    );
  }
}

export default App;
