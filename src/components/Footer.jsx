import React from "react";
import "../css/footer.css";
import "bootswatch/dist/slate/bootstrap.min.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer class="footer">
    <div><a href="#header"><i class=" arrow fas fa-chevron-up fa-3x"></i></a></div>
    <a href="#"><i className="social-icon fab fa-github fa-3x"></i></a>
    <a href="#"><i class="social-icon fab fa-linkedin fa-3x"></i></a>
    <a href="#"><i class="social-icon far fa-envelope fa-3x"></i></a>
      <p>Copyright Seth Stephens {year}</p>
    </footer>
  );
}

export default Footer;
