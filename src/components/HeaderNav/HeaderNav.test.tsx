import * as enzyme from 'enzyme';
import * as React from 'react';
import { HeaderNav } from './HeaderNav';

import {
  loginRequest,
  logout
} from '../../auth/Actions';

it('renders "LOGIN" when the idToken is blank', () => {
  const navbar = enzyme.shallow(
    <HeaderNav 
      idToken="" 
      handleLogin={loginRequest} 
      handleLogout={logout} 
    />
  );
  // console.log(navbar.debug());
  expect(navbar.find('.login-logout').text()).toEqual('LOGIN');
});

it('renders "LOGOUT" when the idToken is NOT blank', () => {
  const navbar = enzyme.shallow(
    <HeaderNav
      idToken="asdf"
      handleLogin={loginRequest}
      handleLogout={logout}
    />
  );
  // console.log(navbar.debug());
  expect(navbar.find('.login-logout').text()).toEqual('LOGOUT');
});