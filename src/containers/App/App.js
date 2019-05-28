import React, { Component } from 'react';
import NewProject from '../NewProject/NewProject';
import SideDrawer from '../SideDrawer/SideDrawer';
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer';
import { Link, Switch, Route } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import { fetchAllProjects, fetchRoomMaterials } from '../../thunks/fetchAllProjects';
import { connect } from 'react-redux';

export class App extends Component {
  componentDidMount = () => {
    this.props.fetchAllProjects();
    this.props.fetchRoomMaterials();
  }

  renderProject = ({ match }) => {
    const project = this.props.projects.find(project => (project.id === parseInt(match.params.id)));
    return <ProjectDetails project={project} />
  }

  render() {
    return (
      <div className="App" id='App'>
        <header className="App-header">
          <SideDrawer />
          <Link to='/'>
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

export const mapDispatchToProps = dispatch => ({
  fetchAllProjects: (projects) => dispatch(fetchAllProjects(projects)),
  fetchRoomMaterials: (materials) => dispatch(fetchRoomMaterials(materials))
});

export const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps, mapDispatchToProps)(App);