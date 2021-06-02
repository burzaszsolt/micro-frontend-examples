import React, { useState } from "react";

import { Slide, SlideContainer, SlideControls, ControlButton } from "./Slides.styled";

const staticSlides = [
  <Slide>Slide1</Slide>,
  <Slide>Slide2</Slide>,
  <Slide>Slide3</Slide>,
];

export const Slides = () => {
  const [slideCount, setSlideCount] = useState(0);

  const onPrevClick = () => setSlideCount((count) => Math.max(0, count - 1));
  const onNextClick = () =>
    setSlideCount((count) => Math.min(staticSlides.length - 1, count + 1));

  return (
    <SlideContainer>
      {staticSlides[slideCount]}
      <SlideControls>
        <ControlButton onClick={onPrevClick}>Vissza</ControlButton>
        <ControlButton onClick={onNextClick}>Előre</ControlButton>
      </SlideControls>
    </SlideContainer>
  );
};
