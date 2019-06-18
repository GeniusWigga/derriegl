import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";

import { Router } from "components/Router";
import Menu from "components/Menu";
import Dynamic from "containers/Dynamic";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Menu />
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
