import React, { createContext, useState, useContext, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import Testing2 from "./componnents/Testing1";
import Test2 from "./componnents/Test2";

const theme = {
  red: {
    background: "red",
    padding: "9px"
  },
  green: {
    background: "green",
    padding: "9px"
  }
};

export const ThemeContext = createContext();
export const Userscontext = createContext();
export default function App() {
  const [title, settitle] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((data) => settitle(data.data[0]));
  }, []);
  console.log(title);
  return (
    <div className="App">
      <h1>mounira</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ThemeContext.Provider value={theme}>
        <Userscontext.Provider value={title}>
          <Testing2 />
          <Test2 />
        </Userscontext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
