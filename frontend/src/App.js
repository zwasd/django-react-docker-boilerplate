import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Link } from 'react-router-dom';
import { Layout, Menu, message, Avatar, Popover, Col, Row, Button, Icon } from 'antd';

import { routes, INDEX_PATH, LOGIN_PATH, SIGNUP_PATH } from './routes';
import { logout } from './actions/auth';
import history from './history';
import './style.less';

const {
    Header, Content, Footer,
} = Layout;


class App extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        message.config({
            top: 80,
            duration: 5,
            maxCount: 5,
        });
    }

    logout = (e) => {
        this.props.logout();
    }

    render() {
        const avatarContent = (
            <div className='avatar-popover-content'>
                <Row className='logout'>
                    <Button onClick={this.logout}>Logout</Button>
                </Row>
            </div>
        )

        return (
            <Router history={history}>
                <Layout className='layout'>
                    <Header className='header' style={{ width: '100%', position: 'fixed', zIndex:1 }}>
                        <Row type='flex' justify='space-between' align='middle'>
                            <div className='logo'>
                                <Link to={INDEX_PATH}>Project</Link>
                            </div>
                            <Row type='flex' justify='end' align='middle'>
                                <Menu
                                    theme='dark'
                                    mode="horizontal"
                                    className='main-menu'
                                    align='right'
                                >
                                    {
                                        !this.props.isAuthenticated ? (
                                            <Menu.Item key="1"><Link to={SIGNUP_PATH}>Signup</Link></Menu.Item>
                                        ) : ''
                                    }
                                    {
                                        !this.props.isAuthenticated ? (
                                            <Menu.Item key="2"><Link to={LOGIN_PATH}>Login</Link></Menu.Item>
                                        ) : ''
                                    }
                                </Menu>
                                {
                                    this.props.isAuthenticated ?
                                    <Popover content={avatarContent} placement="bottomRight" className='avatar-popover' trigger='click'>
                                        <Avatar><Icon type='user' /></Avatar>
                                    </Popover> : ''
                                }
                            </Row>
                        </Row>
                    </Header>
                    <div className='main-body'>
                        <Content>
                            <Switch>
                                {routes.map((route, index) => (
                                    <route.routeType 
                                        key={index}
                                        exact
                                        path={route.path}
                                        component={route.component}
                                    />
                                ))}
                            </Switch>
                        </Content>
                    </div>
                </Layout>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);