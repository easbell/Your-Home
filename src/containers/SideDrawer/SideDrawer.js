import React from 'react';
import { Drawer, Button } from 'antd';

class SideDrawer extends React.Component {
  state = { visible: false, childrenDrawer: false, placement: 'left'};

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
          width={500}
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Button type="default" onClick={this.showChildrenDrawer} block>Project A</Button>
          <Button type="default" onClick={this.showChildrenDrawer} block>Project B</Button>
          <Button type="default" onClick={this.showChildrenDrawer} block>Project C</Button>
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
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;