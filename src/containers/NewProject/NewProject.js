import React from 'react';
import { Button, Modal, Form, Input, Steps, message, Menu, Dropdown, Icon, Card, Table, Divider, Tag } from 'antd';

const Step = Steps.Step;

const ProjectForm = Form.create({ name: 'form_in_modal' })(
  class extends React.Component {

    renderSteps = (getFieldDecorator, current, next, prev, rooms, addRoom, onCreate, name, addName) => {

      const onClick = function ({ key }) {
        message.info(`Added a ${key}`);
        addRoom(key)
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
                        })(<Input onChange={addName}/>)}
                      </Form.Item>
                      <Form.Item label="Description">
                        {getFieldDecorator('description')(<Input type="textarea" />)}
                      </Form.Item>
                    </Form>
        },
        {
          title: 'Rooms',
          content: <div>
                    <Card title="Card title" className="card">
                      {
                        rooms &&
                        rooms.map(room => <p key={room}>{room}</p>)
                      }
                    </Card>
                    <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="#">
                        Select a Room Type <Icon type="down" />
                      </a>
                    </Dropdown>
                   </div>
        },
        {
          title: 'Create Project',
          content: <div>
                    <Card title="Review Project" className="card">
                    <Table dataSource={dataSource} columns={columns} />
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
      const { visible, onCancel, onCreate, form, current, next, prev, rooms, addRoom, onSubmit, name, addName } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new project"
          okText="Create"
          onCancel={onCancel}
          onOk={onSubmit}
        >
        {this.renderSteps(getFieldDecorator, current, next, prev, rooms, addRoom, onCreate, name, addName)}
        </Modal>
      );
    }
  },
);

class NewProject extends React.Component {
  state = {
    visible: false,
    current: 0,
    rooms: [],
    name: ''
  };

  next = () => {
    if(this.state.current === 0) {
      this.handleCreate()
    } else {
      const current = this.state.current + 1;
      this.setState({ current });
    }
  }

  addName = (e) => {
    console.log('working')
    this.setState({name: e.target.value})
  }

  nextField = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  submit = () => {
    if(this.state.name) {
      this.setState({ visible: false });
    }
    console.log(this.state)
  }

  addRoom = (room) => {
    this.setState({ rooms: [...this.state.rooms, room]})
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.setState({name: values.name})
      console.log('Received values of form: ', values);
      form.resetFields();
      this.nextField()
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
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
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          current={this.state.current}
          next={this.next}
          prev={this.prev}
          rooms={this.state.rooms}
          addRoom={this.addRoom}
          onSubmit={this.submit}
          name={this.state.name}
          addName={this.addName}
        />
      </div>
    );
  }
}

export default NewProject;