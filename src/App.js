import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";

import { Router } from "components/Router";
import "./app.scss";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
            <Routes path="en" />
            <Routes path="en/*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
