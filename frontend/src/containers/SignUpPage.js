import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input, Icon, Button, Form } from 'antd';
import Link from 'react-router-dom/Link';

import { LOGIN_PATH } from '../routes';
import { register, clearError } from '../actions/auth';


class SignUpPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.clearError();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.register(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { error } = this.props;

        return (
            <Row className='container' type="flex" justify="center" align='middle'>
                <Col className='auth-box'>
                    <Row>
                        <h2>Sign Up</h2>
                    </Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <p className='error-text'>{error ? error.username || error.email || error.password : ''}</p>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [
                                        { required: true, message: 'please enter a username' },
                                        { pattern: '^[a-zA-Z0-9_]{3,14}$', message: 'invalid username' },
                                    ],
                                })(
                                    <Input
                                        placeholder="username"
                                        prefix={<Icon type="user" />}
                                        size="large"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [
                                        { required: true, message: 'please enter your email address' },
                                        { type: 'email', message: 'invalid email address' },
                                    ],
                                })(
                                    <Input
                                        placeholder="email"
                                        prefix={<Icon type="mail" />}
                                        size="large"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [
                                        { required: true, message: 'please enter a password' },
                                        { pattern: '^.{8,}$', message: 'invalid password' },
                                    ],
                                })(
                                    <Input.Password
                                        placeholder="password"
                                        prefix={<Icon type="lock" />}
                                        size="large"
                                    />
                                )}    
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item>
                                <Button size="large" htmlType="submit" className='submit-button'>
                                    Sign Up
                                </Button>
                            </Form.Item>
                        </Row>
                    </Form>
                    <Row className='extra-options extra-options-signup'>
                        <Link to={LOGIN_PATH}>Login</Link>
                    </Row>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.auth.error,
})

const mapDispatchToProps = (dispatch) => ({
    register: (data) => dispatch(register(data)),
    clearError: () => dispatch(clearError()),
})

SignUpPage = Form.create({ name: 'signup-form' })(SignUpPage);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);