import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Card,
  Cell,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
import cert1 from "../aws_icon_146074.png";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                textAlign: "center",
                width: "800px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
                backgroundColor: "grey",
              }}
            >
              Javascript Apps{" "}
            </CardTitle>
            <CardText></CardText>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Sliding App</a>
            </CardActions>
            <CardActions border>
              <Button
                colored
                href="https://github.com/twentymurial33/blackjack"
              >
                GitHub
              </Button>
              <a href="https://blackjack2022.netlify.app/">BlackJack App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33/Js_blur">
                GitHub
              </Button>
              <a href="https://confident2021.netlify.app/">Fading App</a>
            </CardActions>
          </Card>
          <img className="cert1" src={cert1} alt="logo...." />
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                position: "center",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
                backgroundColor: "grey",
              }}
            >
              React Apps{" "}
            </CardTitle>
            <CardText></CardText>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33/movie">
                GitHub
              </Button>
              <a href="https://dry-cliffs-10729.herokuapp.com/">Movie App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33/react">
                GitHub
              </Button>
              <a href="https://hopeful-nobel-780d52.netlify.app">
                Quote Generator
              </a>
            </CardActions>
            <CardActions border>
              <Button
                colored
                href="https://github.com/twentymurial33/Generator"
              >
                GitHub
              </Button>
              <a href="https://dreamy-wilson.netlify.app/">Quotes</a>
            </CardActions>

            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
