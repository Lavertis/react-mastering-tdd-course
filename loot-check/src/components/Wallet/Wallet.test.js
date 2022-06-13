import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';

describe('Wallet', function () {
    const depositMock = jest.fn();
    const withdrawMock = jest.fn();
    const props = {balance: 20, deposit: depositMock, withdraw: withdrawMock};
    const wallet = shallow(<Wallet {...props}/>);

    it('renders properly', function () {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', function () {
        expect(wallet.find('.balance').text()).toEqual(`Wallet balance: ${props.balance}`);
    });

    it('creates an input to deposit into or withdraw from the balance', function () {
        expect(wallet.find('.input-wallet').exists()).toBeTruthy();
    });

    describe('when user types into the wallet input', function () {
        const balance = '25';

        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', {target: {value: balance}});
        });

        it('updates the local wallet balance in `state` and converts it to a number', function () {
            expect(wallet.state().balance).toEqual(parseInt(balance, 10));
        });

        describe('and user wants to make a deposit', function () {
            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click');
            });

            it('dispatches the `deposit()` it receives from props with the local balance', function () {
                expect(depositMock).toHaveBeenCalledWith(parseInt(balance, 10));
            });
        });

        describe('and user wants to make a withdrawal', function () {
            beforeEach(() => {
                wallet.find('.btn-withdraw').simulate('click');
            });

            it('dispatches the `withdraw()` it receives from props with the local balance', function () {
                expect(withdrawMock).toHaveBeenCalledWith(parseInt(balance, 10));
            });
        });
    });
});