import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { INDEX_PATH } from '.';


const UnauthenticatedRoute = ({ component:Component, isAuthenticated, ...rest }) => (
    <Route
      {...rest}
      render={() =>
        !isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: INDEX_PATH,
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

export default connect(mapStateToProps)(UnauthenticatedRoute);