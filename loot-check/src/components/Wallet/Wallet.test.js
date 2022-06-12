import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';

describe('Wallet', function () {
    const props = {balance: 20};
    const wallet = shallow(<Wallet {...props}/>);

    it('renders properly', function () {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', function () {
        expect(wallet.find('.balance').text()).toEqual(`Wallet balance: ${props.balance}`);
    });
});