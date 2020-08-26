import React, { useContext } from "react";
import { ThemeContext, Userscontext } from "../App";

const Testing2 = () => {
  const { title } = useContext(Userscontext);
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ background: theme.red.background, padding: theme.red.padding }}
    >
      <h1> {title} </h1>
    </div>
  );
};
export default Testing2;
