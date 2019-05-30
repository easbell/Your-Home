import React from 'react';
import { shallow } from 'enzyme';
import { Room } from './Room';
import { setMaterials } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './Room';
import { fetchRoomMaterials } from '../../thunks/fetchRoomMaterials';

jest.mock('../../thunks/fetchRoomMaterials')

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

  it('should gather materials when showDrawer is called', () => {
    wrapper.instance().showDrawer();
    expect(mockFn).toHaveBeenCalled()
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

  it('should mapDispatchToProps', () => {
    const mockMaterials = { shower: [], sink: []}
    const mockDispatch = jest.fn()
    const actionToDispatch = fetchRoomMaterials(mockMaterials)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.fetchRoomMaterials(mockMaterials)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

});