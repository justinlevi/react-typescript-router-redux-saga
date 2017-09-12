import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { AppState as GlobalState } from '../rootReducer';

import { loginRequest, LoginRequest } from './Actions';

export interface RestrictedPageProps {
  // tslint:disable-next-line:no-any
  children?: any;
}

interface StateProps {
  idToken: string | null;
}

interface DispatchProps {
  actions: {
    loginRequest: () => LoginRequest;
  };
}

class RestrictedPage extends React.PureComponent<RestrictedPageProps & StateProps & DispatchProps, {}> {
  public componentWillMount() {
    const { actions, idToken } = this.props;

    if (!idToken) {
      // tslint:disable-next-line:no-console
      console.log('NO TOKEN YO');
      actions.loginRequest();
    }
  }

  public render() {
    const { children, idToken } = this.props;

    return idToken ? children : <div>NOT AUTHORIZED</div>;
  }
}

const mapStateToProps = (state: GlobalState, ownProps: RestrictedPageProps): StateProps => ({
  idToken: state.auth.idToken,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => ({
  actions: bindActionCreators({ loginRequest }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestrictedPage);