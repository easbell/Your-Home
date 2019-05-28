import React from 'react';
import { Button, Modal, Form, Input, Steps, message, Menu, Dropdown, Icon, Card, Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux';
import { addNewProject } from '../../thunks/addNewProject';
import { addProjectHelper } from '../../utils/addProjectHelper';

const Step = Steps.Step;

export const ProjectForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {

    renderSteps = (getFieldDecorator, current, next, prev, rooms, addRoom, onCreate, name, onChange, deleteItem) => {

      const onClick = function ({ key }) {
        message.info(`Added a ${key}`);
        addRoom(key, Date.now())
      };

      const menu = (
        <Menu onClick={onClick}>
          <Menu.Item key="Kitchen">Add Kitchen</Menu.Item>
          <Menu.Item key="Bedroom">Add Bedroom</Menu.Item>
          <Menu.Item key="Bathroom">Add Bathroom</Menu.Item>
          <Menu.Item key="Living Room">Add Living Room</Menu.Item>
          <Menu.Item key="Outdoors">Add Outdoors</Menu.Item>
        </Menu>
      );

      const dataSource = [
        {
          key: '1',
          name: `${name}`,
          rooms: `${rooms.length}`,
        },
      ];

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Rooms',
          dataIndex: 'rooms',
          key: 'rooms',
        }
      ]

      const steps = [
        {
          title: 'Project Name',
          content: <Form layout="vertical">
                      <Form.Item label="Name">
                        {getFieldDecorator('name', {
                          rules: [{ required: true, message: 'Please input the name of the project!' }],
                        })(<Input name='name' onChange={onChange}/>)}
                      </Form.Item>
                      <Form.Item label="Address">
                        {getFieldDecorator('address')(<Input name='address' onChange={onChange} />)}
                      </Form.Item>
                      <Form.Item label="Description">
                        {getFieldDecorator('description')(<Input name='description' onChange={onChange} type="textarea" />)}
                      </Form.Item>
                    </Form>
        },
        {
          title: 'Rooms',
          content: <div>
                    <Card title={name} className="card" extra={<Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="#">
                        Select a Room Type <Icon type="down" />
                      </a>
                    </Dropdown>}>
                      {
                        rooms &&
                        rooms.map(room => <div key={room.id} className="room-item">
                                              <h4>{room.name}</h4>
                                              <Button className="delete-btn"
                                                      name={room.id} 
                                                      onClick={deleteItem}
                                                      >
                                                      delete
                                              </Button>
                                          </div>)
                      }
                    </Card>
                   </div>
        },
        {
          title: 'Create Project',
          content: <div>
                    <Card title="Review Project" className="card">
                    <Table pagination={false} dataSource={dataSource} columns={columns} />
                    </Card>
                   </div>
        }
      ]

      return (
        <div>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
          </div>
        </div>
      )
    }

    render() {
      const { visible, onCancel, onCreate, form, current, next, prev, rooms, addRoom, onSubmit, name, onChange, deleteItem } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new project"
          okText="Create"
          onCancel={onCancel}
          onOk={onSubmit}
          footer={[
            <Button key="back" onClick={onCancel}>
              Cancel
            </Button>,
            current > 1 &&
            <Button key="submit" type="primary" onClick={onSubmit}>
              Submit
            </Button>,
          ]}
        >
        {this.renderSteps(getFieldDecorator, current, next, prev, rooms, addRoom, onCreate, name, onChange, deleteItem)}
        </Modal>
      );
    }
  },
);

export class NewProject extends React.Component {
  state = {
    visible: false,
    current: 0,
    rooms: [],
    name: '',
    address: '',
    description: ''
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  deleteRoomItem = (e) => {
    let newRooms = []
    this.state.rooms.forEach(room => {
      if(room.id != e.target.name) {
        newRooms.push(room)
      }
    })
    this.setState({rooms: newRooms})
  }

  nextField = () => {
    const { current } = this.state;
    const newCurrent = current + 1;
    this.setState({ current: newCurrent });
  }

  prev = () => {
    const { current } = this.state;
    const newCurrent = current - 1;
    this.setState({ current: newCurrent });
  }

  submit = () => {
    const { name, address, description, rooms } = this.state;
    const newProject = { name, address, description, rooms };
    const body = addProjectHelper(newProject)
    this.props.addNewProject(body)
    this.setState({ current: 0, visible: false, rooms: [], name: '', address: '', description: '' });
  }

  addRoom = (room, id) => {
    this.setState({ rooms: [...this.state.rooms, {name: room, id, type: room}]})
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div id='add'>
        <Button 
          type="primary" 
          onClick={this.showModal}>
            New Project
        </Button>
        <ProjectForm
          visible={this.state.visible}
          onCancel={this.handleCancel}
          current={this.state.current}
          next={this.nextField}
          prev={this.prev}
          rooms={this.state.rooms}
          addRoom={this.addRoom}
          onSubmit={this.submit}
          name={this.state.name}
          onChange={this.onChange}
          deleteItem={this.deleteRoomItem}
        />
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addNewProject: (project) => dispatch(addNewProject(project)),
})

export default connect(null, mapDispatchToProps)(NewProject);