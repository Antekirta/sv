import React from "react";
import { connect } from "react-redux";
import { iState } from "../../store/reducers";
import { loginStart } from "../../store/actions";
import { Dispatch, bindActionCreators } from "redux";

interface iLoginPageProps extends iState {}

class LoginPage extends React.Component<iLoginPageProps> {
  render() {
    return (
      <React.Fragment>
        <h1>Login page</h1>

        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <label>
            Username
            <input type="text" />
          </label>

          <label>
            Password
            <input type="password" />
          </label>

          <button type="submit">Login</button>

          {this.props.app.inProgress
            ? "Прелоадер для бедных. Представьте, что здесьь что-нибудь крутится."
            : null}
        </form>
      </React.Fragment>
    );
  }

  onSubmitHandler(event: any) {
    event.preventDefault();

    const userName = "admin";
    const password = "admin";

    // @ts-ignore
    this.props.loginActions.loginStart(userName, password);
  }
}

const mapStateToProps = (store: iState) => {
  return store;
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    loginActions: bindActionCreators({ loginStart }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
