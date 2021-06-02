import React, { useEffect } from "react";

import { useMicrofrontend } from "../../hooks/useMicrofrontend";

export const App1 = () => {
  const id = "mfApp1";
  const { isLoaded, mfApp1 } = useMicrofrontend(
    id,
    "http://localhost:3000/microfrontends/mf-app1.js"
  );

  useEffect(() => {
    if (!mfApp1) return;
    const { render, unMount } = mfApp1;
    render(id);

    return () => unMount(id);
  }, [isLoaded]); // eslint-disable-line

  if (!isLoaded) return null;
  if (!mfApp1) return <p>App1 microfrontend is not available</p>;

  return <div id={id} />;
};
