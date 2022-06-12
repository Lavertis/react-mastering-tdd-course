import React, {Component} from 'react';
import {Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";


class Gift extends Component {
    constructor() {
        super();

        this.state = {person: '', present: ''}
    }

    render() {
        return (
            <div>
                <Form>
                    <FormLabel>Person</FormLabel>
                    <FormGroup>
                        <FormControl
                            className="input-person"
                            onChange={(e) => this.setState({person: e.target.value})}
                        />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Gift;
