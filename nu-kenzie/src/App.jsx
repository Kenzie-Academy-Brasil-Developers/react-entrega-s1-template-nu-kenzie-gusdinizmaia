import React from "react";
import "./App.css";
import { ButtonLogin } from "./config/createTransaction";

import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";

function App() {
  return (
    <React.Fragment>
      <HomePage />
      <ProfilePage />
      {/* <ButtonLogin /> */}
    </React.Fragment>
  );
}

export default App;
