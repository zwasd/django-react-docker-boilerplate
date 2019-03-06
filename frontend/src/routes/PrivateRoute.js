import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOGIN_PATH } from '.';


const PrivateRoute = ({ component:Component, isAuthenticated, ...rest }) => (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_PATH,
              state: { from: rest.path }
            }}
          />
        )
      }
    />
);

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token,
})

export default connect(mapStateToProps)(PrivateRoute)