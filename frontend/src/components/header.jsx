import React from "react";
import "../css/header.css";
// import App from "../App";
import {Button}  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "/icons/youtube.jpg";

class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.addVideoFormRef = React.createRef();
  }

  
  render() {
    return (
      <header>
        <img src="/icons/youtube.jpg" alt="" />
        <a href="/"><Button>Main page</Button></a>
        <a  href="http://localhost:8000/admin" target="_blank" ><Button>Admin page</Button></a>
        <a href="/create_video/" className="create_video"><Button>Add video</Button></a>
      </header>
    );
  }

}


export default Header;