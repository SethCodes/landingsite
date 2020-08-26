import React from "react";
import "../css/project.css";

function Project(props) {
  return (
    <div class="container mb-5">
      <div className="row no-gutters">
        <div className="col-md-6">
          <img className="project-img" src={props.imageURL} alt="avatar" />
        </div>
        <div className="col-md-6">
          <div className="container-body">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
          </div>
          <button
            type="button"
            href="#"
            className="proj-button btn"
            onMouseOver="shadow-lg"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
