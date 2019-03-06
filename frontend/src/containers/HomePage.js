import React, { Component } from 'react';
import { Row, Col } from 'antd';


class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row className='container home-page' type='flex' justify='center' align='middle'>
                <Col>
                    <h1>Home</h1>
                </Col>
            </Row>
        )
    }
}

export default HomePage;