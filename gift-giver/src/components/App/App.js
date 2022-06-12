import {Component} from "react";
import {Button} from "react-bootstrap";
import Gift from "../Gift/Gift";
import {maxNumber} from "../../helpers";

class App extends Component {
    constructor() {
        super();

        this.state = {gifts: []};
    }

    addGift = () => {
        const {gifts} = this.state;
        const ids = gifts.map(gift => gift.id);
        const maxId = maxNumber(ids);
        gifts.push({id: maxId + 1});
        this.setState({gifts});
    };

    removeGift = (id) => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);
        this.setState({gifts});
    };

    render() {
        return (
            <div className="App">
                <h2>Gift Giver</h2>
                <div className="gift-list">
                    {this.state.gifts.map(gift => {
                        return (
                            <Gift
                                key={gift.id}
                                gift={gift}
                                removeGift={this.removeGift}
                            />
                        );
                    })}
                </div>
                <Button
                    className="btn-add"
                    onClick={this.addGift}>
                    Add Gift
                </Button>
            </div>
        );
    }
}

export default App;
