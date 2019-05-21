import React from 'react';
import { Drawer } from 'antd';

class SideDrawer extends React.Component {
  state = { visible: false, placement: 'left' };

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

  render() {
    return (
      <div id='menu'>
        <img src="https://img.icons8.com/ios/30/ffffff/menu-filled.png"
          onClick={this.showDrawer}
          alt='menu'>
        </img>
        <Drawer
          title="Your Projects"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Project A</p>
          <p>Project B</p>
          <p>Project C</p>
        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;