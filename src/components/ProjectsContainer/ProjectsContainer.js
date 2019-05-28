import React, { Component } from 'react';
import Project from '../Project/Project';
import { connect } from 'react-redux';

export class ProjectsContainer extends Component {
  
  renderProjects = () => {
    return this.props.projects.map(project => {
      return <Project key={project.id} {...project}/>
    });
  }

  render() {
    return (
      <div className='projects'>
        {this.renderProjects()}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectsContainer);