import * as React from 'react';
import { Route, Switch } from 'react-router';
// import { Route, Switch } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { bindActionCreators, Dispatch } from 'redux';

// import {
//   loginRequest, 
//   logout 
// } from './../auth/Actions';

// import { AppState } from './../rootReducer';

import RestrictedPage from '../auth/RestrictedPage';

import Navbar from '../components/Navbar';

// import { DispatchProps } from '../components/Navbar/Navbar';

import About from '../views/About';
import Admin from '../views/Admin';
import Home from '../views/Home';

// interface DispatchProps {
//   loginRequest?: () => LoginRequest;
//   logout?: () => Logout;
// }

// interface StateProps {
//   idToken?: string | null;
// }

// type State = StateProps & DispatchProps;

export const Routes: React.StatelessComponent = () => (
  <div>
    <Navbar />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/admin" >
        <RestrictedPage>
          <Admin />
        </RestrictedPage>
      </Route>
    </Switch>
  </div>
);

// function mapStateToProps({ auth }: AppState) {
//   return { ...auth };
// }

// const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>): DispatchProps => ({
//   handleLogin: bindActionCreators(loginRequest, dispatch),
//   handleLogout: bindActionCreators(logout, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Routes);