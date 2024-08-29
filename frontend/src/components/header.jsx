import React from "react";
import "../css/header.css";
// import App from "../App";
import {Button}  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="/"><Button>Main page</Button></a>
        <a href="/page2/"><Button>Page 2</Button></a>
        <a href="http://localhost:8000/admin"><Button>Admin page</Button></a>
      </header>
    );
  }

}


export default Header;