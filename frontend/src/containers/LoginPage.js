import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Input, Icon, Button, Form } from 'antd';
import Link from 'react-router-dom/Link';

import { SIGNUP_PATH } from '../routes';
import { login, clearError } from '../actions/auth';


class LoginPage extends Component {
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
                this.props.login(values);
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
                        <h2>Login</h2>
                    </Row>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <p className='error-text'>{error ? error.non_field_errors : ''}</p>
                            <Form.Item>
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: 'please enter your email' }],
                                })(
                                    <Input
                                        placeholder='email'
                                        prefix={<Icon type="mail" />}
                                        size="large"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'please enter your password' }],
                                })(
                                    <Input.Password
                                        placeholder='password'
                                        prefix={<Icon type="lock" />}
                                        size="large"
                                    />
                                )}    
                            </Form.Item>
                        </Row>
                        <Row>
                            <Form.Item>
                                <Button size="large" htmlType="submit" className='submit-button'>
                                    Login
                                </Button>
                            </Form.Item>
                        </Row>
                    </Form>
                    <Row className='extra-options'>
                        <Link to={SIGNUP_PATH}>Sign Up</Link>
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
    login: (data) => dispatch(login(data)),
    clearError: () => dispatch(clearError()),
})

LoginPage = Form.create({ name: 'login-form' })(LoginPage);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);