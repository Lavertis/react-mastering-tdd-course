import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchBitcoin} from "../../actions/bitcoin/bitcoinActions";

export class Loot extends Component {
    componentDidMount() {
        this.props.fetchBitcoin();
    }

    computeBitcoin() {
        const {bitcoin} = this.props;
        if (Object.keys(bitcoin).length === 0)
            return '';

        const bitcoinRate = parseInt(bitcoin.bpi.USD.rate.replaceAll(',', ''), 10);
        return this.props.balance / bitcoinRate;
    }

    render() {
        return (
            <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
        );
    }
}


export default connect(state => state, {fetchBitcoin})(Loot);