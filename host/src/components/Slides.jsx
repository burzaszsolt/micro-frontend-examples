import React, { useState } from "react";

const staticSlides = [<p>Slide1</p>, <p>Slide2</p>, <p>Slide3</p>];

export const Slides = () => {
  const [slideCount, setSlideCount] = useState(0);

  const onPrevClick = () => setSlideCount((count) => Math.max(0, count - 1));
  const onNextClick = () =>
    setSlideCount((count) => Math.min(staticSlides.length - 1, count + 1));

  return (
    <>
      {staticSlides[slideCount]}
      <button onClick={onPrevClick}>Vissza</button>
      <button onClick={onNextClick}>Előre</button>
    </>
  );
};
