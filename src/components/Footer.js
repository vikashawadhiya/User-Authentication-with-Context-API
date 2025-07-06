import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Footer() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <footer style={{ padding: "10px", background: "#ddd" }}>
      {isLoggedIn ? "Welcome, User" : "Please log in"}
    </footer>
  );
}

export default Footer;
