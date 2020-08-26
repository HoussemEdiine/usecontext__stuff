import React, { useContext } from "react";
import { ThemeContext, Userscontext } from "../App";
const Test2 = () => {
  const dar = useContext(ThemeContext);
  const { title } = useContext(Userscontext);
  return (
    <div
      style={{ background: dar.green.background, padding: dar.green.padding }}
    >
      <h2> {title}</h2>
    </div>
  );
};
export default Test2;
