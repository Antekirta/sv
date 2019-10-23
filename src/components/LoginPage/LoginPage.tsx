import React from "react";
import { connect } from "react-redux";
import { iState } from "../../store/reducers";
import { loginStart } from "../../store/actions";
import { Dispatch, bindActionCreators } from "redux";
import { Redirect } from "react-router";
import { ROUTES } from "../../registry/ROUTES";

interface iLoginPageProps extends iState {}

class LoginPage extends React.Component<iLoginPageProps> {
  render() {
    return (
      <React.Fragment>
        {this.props.user.isLogged ? <Redirect to={ROUTES.ADMIN_PANEL} /> : null}

        <h1>Login page</h1>

        {this.props.app.error ? `Error: ${this.props.app.error}` : ""}

        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <label>
            Username
            <input name="userName" type="text" />
          </label>

          <label>
            Password
            <input name="password" type="password" />
          </label>

          <button type="submit">Login</button>

          {this.props.app.inProgress
            ? "Прелоадер для бедных. Представьте, что здесь что-нибудь крутится."
            : null}
        </form>
      </React.Fragment>
    );
  }

  onSubmitHandler(event: any) {
    event.preventDefault();

    const { target } = event;

    const userName = target.userName.value;
    const password = target.password.value;

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
