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
import { Link } from "react-router-dom";

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
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                textAlign: "center",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
                backgroundColor: "grey",
              }}
            >
              React Apps{" "}
            </CardTitle>
            <CardText></CardText>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Deployed App</a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Javascript</h1>
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
