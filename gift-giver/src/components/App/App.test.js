import React from "react";
import App from './App';
import {shallow} from "enzyme";


describe('App', () => {
    const app = shallow(<App/>)

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the `state` with a empty list of gifts', () => {
        jest.spyOn(React, 'useState')
        expect(app.state().gifts).toEqual([])
    });

    describe('when clicking the `add gift` button', () => {
        const giftId = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });

        afterEach(() => {
            app.setState({gifts: []});
        });

        it('adds a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{id: giftId}]);
        });

        it('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children()).toHaveLength(1);
        });

        it('creates a Gift component', () => {
            expect(app.find('Gift').exists()).toBeTruthy();
        });

        describe('and the user wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(giftId);
            });

            it('removes the gift from `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
    });
});