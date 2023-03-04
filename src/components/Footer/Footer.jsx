import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.scss";

const Footer = ({ show, setShow }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      pathname !== "/" &&
      pathname !== "/about" &&
      pathname !== "/projects" &&
      pathname !== "/contact"
    ){
      setShow(!show)
    }
  }, [])
  
    return (
      <footer
        className={
          pathname === "/contact"
            ? "middle"
            : pathname === "/"
            ? "horizontal"
            : "vertical"
        }
      >
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="#">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="#">
            <i className="fab fa-instagram fa-2x" />
          </a>
          <a href="#">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
        <div className="copyright">© Copyright 2023</div>
      </footer>
    );
};

export default Footer;
