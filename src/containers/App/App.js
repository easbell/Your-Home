import React, { Component } from 'react';
import NewProject from '../NewProject/NewProject';
import SideDrawer from '../SideDrawer/SideDrawer';
import ProjectsContainer from '../../components/ProjectsContainer/ProjectsContainer';
import { Link, Switch, Route } from 'react-router-dom';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import mockProjects from '../../mockProject';
import RoomItems from '../RoomItems/RoomItems'

class App extends Component {

  renderProject = ({ match }) => {
    const project = mockProjects.data.find(project => parseInt(project.id) === match.params.id)
    return <ProjectDetails project={project} />
  }

  renderRoomItems = ({ match }) => {
    // const project = mockProjects.data.find(project => parseInt(project.id) === match.params.id)
    // const room = project.rooms.find(room => parseInt(room.id) === match.params.id)
    return <RoomItems />
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
            <Route exact path='/projects/:id/rooms/:id'
              render={this.renderRoomItems}
            />
          </Switch>
        </div>
      </div>
    );
  }
} 

export default App;
