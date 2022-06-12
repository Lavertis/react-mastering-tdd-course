import React, {Component} from 'react';
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";


class Gift extends Component {
    constructor() {
        super();

        this.state = {person: '', present: ''};
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl
                            className="input-person"
                            onChange={(e) => this.setState({person: e.target.value})}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl
                            className="input-present"
                            onChange={(e) => this.setState({present: e.target.value})}
                        />
                    </FormGroup>
                </Form>
                <Button
                    className="btn-remove"
                    onClick={() => this.props.removeGift(this.props.gift.id)}>
                    Remove Gift
                </Button>
            </div>
        );
    }
}

export default Gift;
