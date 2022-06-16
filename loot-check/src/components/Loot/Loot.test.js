import React from 'react';
import {mount, shallow} from 'enzyme';
import {Loot} from './Loot';

describe('Loot', function () {
    const fetchBitcoinMock = jest.fn();
    const props = {balance: 10, bitcoin: {}, fetchBitcoin: fetchBitcoinMock};
    let loot = shallow(<Loot {...props}/>);

    it('renders properly', function () {
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
});