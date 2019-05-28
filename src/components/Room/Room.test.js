import React from 'react';
import { shallow } from 'enzyme';
import { Room } from './Room';
import { setMaterials } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './Room';

describe('Room', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = shallow(<Room fetchRoomMaterials={mockFn}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should gather materials when showDrawer is called', async () => {
    await wrapper.instance().showDrawer();
    expect(wrapper.props.fetchRoomMaterials).toHaveBeenCalled()
  });

  it('should setState on showDrawer', async () => {
    wrapper.setState({ visible: false })
    await wrapper.instance().showDrawer();
    expect(wrapper.state('visible')).toBe(true);
  });

  it('should setState on onClose', () => {
    wrapper.setState({ visible: true })
    wrapper.instance().onClose();
    expect(wrapper.state('visible')).toBe(false);
  });

  it('should return a state object', () => {
    const mockState = {
      projects: [],
      materials: {},
      randomState: {}
    }
    const expected = {
      materials: {}
    }

    const mockProps = mapStateToProps(mockState)
    expect(mockProps).toEqual(expected)
  });

  it.skip('should mapDispatchToProps', () => {
    const mockMaterials = { shower: [], sink: []}
    const mockDispatch = jest.fn()
    const actionToDispatch = setMaterials(mockMaterials)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setMaterials(mockMaterials)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

});