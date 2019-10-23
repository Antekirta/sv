import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { iState } from "../../store/reducers";
import { ROUTES } from "../../registry/ROUTES";

interface iAdminPanelProps extends iState {}

interface iAdminPanelState {}

class AdminPanel extends React.Component<iAdminPanelProps, iAdminPanelState> {
  constructor(props: iAdminPanelProps, state: iAdminPanelState) {
    super(props, state);

    if (!this.props.user.isLogged) {
      // @ts-ignore
      this.props.history.push(ROUTES.HOME);
    }
  }

  render() {
    return <h2>Admin panel!</h2>;
  }
}

const mapStateToProps = (store: iState) => {
  return store;
};

export default withRouter(connect(mapStateToProps)(AdminPanel));
