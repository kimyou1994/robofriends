import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps }/>)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2} />)
    expect(wrapper2.find('CardList').prop('robots')).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }])
})

it('filters robots correctly different case', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapper3 = shallow(<MainPage { ...mockProps3} />)
    expect(wrapper3.find('CardList').prop('robots')).toEqual([])
})

it('isPending gives a loading screen', () => {
    const mockProps4 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: true
    }
    const wrapper4 = shallow(<MainPage { ...mockProps4} />)
    expect(wrapper4.find('CardList').exists()).toBe(false)
    expect(wrapper4.find('h1').text()).toBe('Loading...')
})