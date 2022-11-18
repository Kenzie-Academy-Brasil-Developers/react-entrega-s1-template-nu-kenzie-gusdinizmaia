import React from "react";
import "./App.css";

import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";

function App() {
  return (
    <React.Fragment>
      <HomePage />
      <ProfilePage />
    </React.Fragment>
  );
}

export default App;
