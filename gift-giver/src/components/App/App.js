import {Component} from "react";
import {Button, Col} from "react-bootstrap";
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
            <Col xs={4} className="App text-center mx-auto my-5">
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
                <Button className="btn-add m-2" onClick={this.addGift}>Add Gift</Button>
            </Col>
        );
    }
}

export default App;
