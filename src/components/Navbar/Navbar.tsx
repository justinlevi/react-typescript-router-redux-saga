import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { 
  loginRequest, 
  LoginRequest, 
  Logout, 
  logout 
} from '../../auth/Actions';

import { AppState as GlobalState } from '../../rootReducer';

export interface StateProps {
  idToken?: string | null;
}

export interface DispatchProps {
  handleLogin: () => LoginRequest;
  handleLogout: () => Logout;
}

// const Navbar: React.PureComponent<StateProps & DispatchProps> = ({
//   idToken,
//   handleLogin,
//   handleLogout,
// }) => (
  // <div>
  //   <NavLink to="/" exact={true} >Home</NavLink>
  //   <NavLink to="/about" >About</NavLink>
  //   <button><div onClick={idToken ? handleLogin : handleLogout}>{idToken ? 'LOGOUT' : 'LOGOUT'}</div></button>
  // </div>
//   );

const Navbar: React.StatelessComponent<StateProps & DispatchProps> = ({ 
  idToken, handleLogin, handleLogout }) => {

  return (
    <div style={{ borderBottom: '1px solid #333', backgroundColor: '#F7F7F7', textAlign: 'center', padding: '1em', }}>
      <NavLink style={{margin: '1em'}} to="/" exact={true} >HOME</NavLink>&nbsp;|&nbsp;
      <NavLink style={{ margin: '1em' }} to="/about" >ABOUT</NavLink>&nbsp;|&nbsp;
      <button style={{ margin: '1em' }}>
        <div onClick={idToken ? handleLogout : handleLogin}>
          {idToken ? 'LOGOUT' : 'LOGIN'}
        </div></button>
    </div>
  );
};

// export default Navbar;

const mapStateToProps = (state: GlobalState, ownProps: StateProps): StateProps => ({
  idToken: state.auth.idToken,
});

const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>): DispatchProps => ({
  handleLogin: bindActionCreators(loginRequest, dispatch),
  handleLogout: bindActionCreators(logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
