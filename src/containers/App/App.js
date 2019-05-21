import React, { Component } from 'react';
import NewProject from '../NewProject/NewProject';
import SideDrawer from '../SideDrawer/SideDrawer';
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer';
import { Link, Switch, Route } from 'react-router-dom';
import Project from '../../components/Project/Project';
import mockProjects from '../../mockProject';

class App extends Component {

  renderProject = ({ match }) => {
    const project = mockProjects.data.find(project => parseInt(project.id) === match.params.id)
    return <Project project={project} />
  }

  render() {
    return (
      <div className="App" id='App'>
        <header className="App-header">
          <SideDrawer />
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h1>YourHome</h1>
          </Link>
          <NewProject />
        </header>
        <div>
          <Switch>
            <Route exact path='/'
              render={() => <ProjectsContainer />}
            />
            <Route exact path='/projects/:id'
              render={this.renderProject}
            />
          </Switch>
        </div>
      </div>
    );
  }
} 

export default App;
