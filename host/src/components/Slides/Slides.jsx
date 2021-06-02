import React, { useState } from "react";

import { SlideContainer, SlideControls, ControlButton } from "./Slides.styled";
import { staticSlides } from "./StaticSlides";

export const Slides = () => {
  const [slideCount, setSlideCount] = useState(0);

  const onPrevClick = () => setSlideCount((count) => Math.max(0, count - 1));
  const onNextClick = () =>
    setSlideCount((count) => Math.min(staticSlides.length - 1 , count + 1));

  return (
    <SlideContainer>
      {staticSlides[slideCount]}
      <SlideControls>
        <ControlButton onClick={onPrevClick}>Prev</ControlButton>
        <ControlButton onClick={onNextClick}>Next</ControlButton>
      </SlideControls>
    </SlideContainer>
  );
};
