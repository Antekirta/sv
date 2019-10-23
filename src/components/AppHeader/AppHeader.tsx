import React from "react";
import { Link } from "react-router-dom";
import "./AppHeader.scss";

interface iLink {
  href: string;
  title: string;
}

export interface iAppHeaderProps {
  links: iLink[];
}

export const AppHeader: React.FC<iAppHeaderProps> = (
  props: iAppHeaderProps
) => {
  return (
    <section className="app-header">
      <nav className="app-header__menu">
        <ul className="app-header__list">
          {props.links.map(link => {
            return (
              <li className="app-header__item" key={link.href}>
                <Link to={link.href} className="app-header__link">
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
