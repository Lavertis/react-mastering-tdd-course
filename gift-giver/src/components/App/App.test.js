import React from "react";
import App from './App';
import {shallow} from "enzyme";

const app = shallow(<App/>)

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});

it('initializes the `state` with a empty list of gifts', () => {
    jest.spyOn(React, 'useState')
    expect(app.state().gifts).toEqual([])
});

it('adds a new gift to `state` when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.state().gifts).toEqual([{id: 1}]);
});

it('adds a new gift to the rendered list when clicking the `add gift` button', () => {
    app.find('.btn-add').simulate('click');
    expect(app.find('.gift-list').children()).toHaveLength(2);
})