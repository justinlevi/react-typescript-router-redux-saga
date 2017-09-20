import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavItem from '../RouterNavItem';

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

/*
  - Why does this need to be a StatelessComponent to work? Why can't I extend Component?
  - Why doesn't code completion work when I type React. then control + space
*/ 
export const HeaderNav: React.StatelessComponent<StateProps & DispatchProps> = ({ 
  idToken, handleLogin, handleLogout }) => {

  return (
    <Navbar fluid={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Nav>
          <NavItem href="/about">ABOUT</NavItem>
          <NavItem href="/admin">ADMIN</NavItem>
        </Nav>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight={true} >
          <NavItem href="#login" onClick={idToken ? handleLogout : handleLogin}>
            <div className="login-logout">{idToken ? 'LOGOUT' : 'LOGIN'}</div>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
