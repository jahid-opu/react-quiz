import React from "react";
import Nav from "./Nav";
import classes from "../styles/Layout.module.css";
import { AuthProvider } from "../contexts/AuthContext";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
