import React from "react";

import { Slide as SlideStyled } from "./Slide.styled";

export const Slide = ({ title, subTitle, children, backgroundColor }) => (
  <SlideStyled backgroundColor={backgroundColor}>
    {title && <h1>{title}</h1>}
    {subTitle && <h2>{subTitle}</h2>}
    {children}
  </SlideStyled>
);
