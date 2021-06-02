import styled from "styled-components";

export const Slide = styled.div`
  background-color: ${props => props?.backgroundColor || 'lavender'};
  width: 80vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
