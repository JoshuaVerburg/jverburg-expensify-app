import { shallow } from 'enzyme'
import React from 'react'
import { Header } from '../../components/Header'

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});
let startLogout,  wrapper;
beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header 
        startLogout={startLogout}/>);
})

test('should call startLogin on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenLastCalledWith();
});
