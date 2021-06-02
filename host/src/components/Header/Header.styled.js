import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-item: center;
  height: 30px;
  margin: 0;
  padding: 20px;
`;

export const ListItem = styled.li`
  margin: 0px 10px;
`;

export const Link = styled(RouterLink)`
  text-decoration: ${(props) => (props.isActive ? "underline" : "none")};
  font-size: 1.4rem;
`;
