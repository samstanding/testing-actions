import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [string, setString] = useState("King of slams");

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(setString("Turbo Team"));
      }, 500);
    });
  }, []);

  return <p>{string}</p>;
}

export default App;
