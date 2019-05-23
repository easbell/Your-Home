import React, { Component } from 'react';
// import mockProjects from '../../mockProject';
import Project from '../Project/Project';

export class ProjectsContainer extends Component {
  
  renderProjects = () => {
    return this.props.projects.map((project, i) => {
      return <Project key={i} {...project}/>
    });
  }

  render() {
    return (
      <div className='projects'>
        {this.renderProjects()}
      </div>
    )
  }
}

export default ProjectsContainer
