import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./AppHeader.scss";
import { iState } from "../../store/reducers";
import { ROUTES } from "../../registry/ROUTES";

interface iLink {
  href: string;
  title: string;
}

export interface iAppHeaderProps extends iState {}

class AppHeader extends React.Component<iAppHeaderProps> {
  links: iLink[] = [{ href: "/", title: "Home" }];

  render() {
    return (
      <section className="app-header">
        <nav className="app-header__menu">
          <ul className="app-header__list">
            {this.links.map(link => {
              return (
                <li className="app-header__item" key={link.href}>
                  <Link to={link.href} className="app-header__link">
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <li className="app-header__item">
              <Link to={ROUTES.ADMIN_PANEL} className="app-header__link">
                {this.props.user.isLogged ? this.props.user.name : "Sign in"}
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

const mapStateToProps = (store: iState) => {
  return store;
};

export default connect(mapStateToProps)(AppHeader);
