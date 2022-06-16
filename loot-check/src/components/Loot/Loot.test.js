import React from 'react';
import {mount, shallow} from 'enzyme';
import {Loot} from './Loot';

describe('Loot', function () {
    const fetchBitcoinMock = jest.fn();
    let props = {balance: 10, bitcoin: {}, fetchBitcoin: fetchBitcoinMock};
    let loot = shallow(<Loot {...props} />);

    it('renders properly', () => {
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', function () {
        beforeEach(() => {
            props.fetchBitcoin = fetchBitcoinMock;
            loot = mount(<Loot {...props}/>);
        });

        it('dispatches the `fetchBitcoin()` method it receives from props', function () {
            expect(fetchBitcoinMock).toHaveBeenCalled();
        });
    });

    describe('when there are valid bitcoin props', function () {
        beforeEach(() => {
            props = {...props, balance: 10, bitcoin: {bpi: {USD: {rate: '1,000'}}}};
            loot = shallow(<Loot {...props}/>);
        });

        it('displays the correct bitcoin value', function () {
            expect(loot.find('h3').text()).toEqual("Bitcoin balance: 0.01");
        });
    });
});