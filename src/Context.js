import React, { useContext, useEffect, useState, createContext } from "react";

export const Userscontext = createContext();
export const UserProvider = (props) => {
  const [title, settitle] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      settitle(res.data)
    );
  }, []);
  return (
    <Userscontext.Provider value={title}>
      {props.children}
    </Userscontext.Provider>
  );
};
