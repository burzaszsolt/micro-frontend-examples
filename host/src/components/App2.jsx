import React from "react";

const App2Service = React.lazy(() => import("mfApp2/App2Service"));

export const App2 = () => (
  <React.Suspense fallback="Loading App2Service">
    <App2Service />
  </React.Suspense>
);
