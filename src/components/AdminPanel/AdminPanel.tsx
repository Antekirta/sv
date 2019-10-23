import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { iState } from "../../store/reducers";
import { ROUTES } from "../../registry/ROUTES";

interface iAdminPanelProps extends iState {}

interface iAdminPanelState {}

class AdminPanel extends React.Component<iAdminPanelProps, iAdminPanelState> {
  render() {
    return this.props.user.isLogged ? (
      <h2>Admin panel!</h2>
    ) : (
      <Redirect to={ROUTES.LOGIN_PAGE}></Redirect>
    );
  }
}

const mapStateToProps = (store: iState) => {
  return store;
};

export default connect(mapStateToProps)(AdminPanel);
