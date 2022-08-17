import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import "./MyNavLink.css";

// <MyNavLink to="foo">bla</MyNavLink>

type Props = {
  to: string;
  children: ReactNode;
};

export default function MyNavLink(props: Props) {
  return (
    <NavLink
      to={props.to}
      className={(data) =>
        data.isActive ? "MyNavLink MyNavLink--Active" : "MyNavLink"
      }
    >
      {props.children}
    </NavLink>
  );
}
