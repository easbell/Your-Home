import React from 'react';
import { Drawer, Button } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SideDrawer extends React.Component {
  state = { 
    visible: false, 
    childrenDrawer: false, 
    placement: 'left'
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  renderProjects = () => {
    return this.props.projects.map(project => (
      <Link to={`/projects/${project.id}`} onClick={this.onClose} key={'link'+project.id}>
        <Button type="default" key={project.id} block>{project.name}</Button>
      </Link>
    ))
  }

  render() {
    return (
      <div id='menu'>
        <img src="https://img.icons8.com/ios/30/ffffff/menu-filled.png"
          onClick={this.showDrawer}
          alt='menu'>
        </img>
        <Drawer
          title="Your Projects"
          width={500}
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          {this.renderProjects()}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e8e8e8',
              padding: '10px 16px',
              textAlign: 'right',
              left: 0,
              background: '#fff',
              borderRadius: '0 0 4px 4px',
            }}
          >
            <Button
              style={{
                marginRight: 8,
              }}
              onClick={this.onClose}
            >
              Cancel
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(mapStateToProps)(SideDrawer);