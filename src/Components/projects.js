import React, { Component } from "react";
import { Grid, Card, Cell, CardActions, Button } from "react-mdl";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card
            shadow={1}
            style={{ minWidth: "400", margin: "auto", marginTop: "0px" }}
          >
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33/movie">
                GitHub
              </Button>
              <a href="https://dry-cliffs-10729.herokuapp.com/">Movie App</a>
            </CardActions>
            <CardActions border>
              <Button colored href="https://github.com/twentymurial33">
                GitHub
              </Button>
              <a href="https://slider23.netlify.app">Sliding App</a>
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
                href="https://github.com/twentymurial33/blackjack"
              >
                GitHub
              </Button>
              <a href="https://blackjack2022.netlify.app/">BlackJack App</a>
            </CardActions>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Cell col={10}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
