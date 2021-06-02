import styled from "styled-components";

export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SlideControls = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

export const ControlButton = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: lavender;
  border: 1px solid black;
  border-radius: 20px;
  width: 100px;
  cursor: pointer;
  &:hover {
    background-color: silver;
  }
`;
