import React from "react";
import "../css/header.css";
import "bootswatch/dist/slate/bootstrap.min.css";
import {Button} from "react-bootstrap";

function Header(){

    function handleClick() {
        alert("button clicked");
      }
return <div id="header">
<div className="parallax"></div>
<div className="over-parallax shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Hi! I'm Seth. Your next BESTest, most FAVORITEst developer.</h1>
        <p>React site from scratch coming soon.</p>
        <Button
          type="button"
          className="btn btn-lg active btn-parallax"
          onClick={handleClick}
        >
          <span>Contact The New Kid</span>
        </Button>
      </div>

</div>
}

export default Header;

