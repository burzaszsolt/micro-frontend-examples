import React from "react";

import { List, ListItem, Link } from "./Header.styled";

export const Header = () => (
  <nav>
    <List>
      <ListItem>
        <Link to="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link to="/app1">App1</Link>
      </ListItem>
      <ListItem>
        <Link to="/app2">App2</Link>
      </ListItem>
      <ListItem>
        <Link to="/app3">App3</Link>
      </ListItem>
    </List>
  </nav>
);
