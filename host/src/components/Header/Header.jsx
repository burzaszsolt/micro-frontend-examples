import React from "react";
import { useLocation } from "react-router";

import { List, ListItem, Link } from "./Header.styled";

export const Header = () => {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;
  return (
    <nav>
      <List>
        <ListItem>
          <Link isActive={isActive("/")} to="/">
            Slides
          </Link>
        </ListItem>
        <ListItem>
          <Link isActive={isActive("/app1")} to="/app1">
            App1
          </Link>
        </ListItem>
        <ListItem>
          <Link isActive={isActive("/app2")} to="/app2">
            App2
          </Link>
        </ListItem>
        <ListItem>
          <Link isActive={isActive("/app3")} to="/app3">
            App3
          </Link>
        </ListItem>
      </List>
    </nav>
  );
};
