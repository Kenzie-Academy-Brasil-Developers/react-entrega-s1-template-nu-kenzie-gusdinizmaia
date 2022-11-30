import React, { useState } from "react";
import "./App.css";

import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";

function App() {
  const [page, setPage] = useState("home");

  return (
    <React.Fragment>
      {page === "home" ? (
        <HomePage callbackPage={setPage} />
      ) : (
        <ProfilePage callbackPage={setPage} />
      )}
    </React.Fragment>
  );
}

export default App;
