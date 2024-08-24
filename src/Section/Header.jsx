import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { s3BaseUrl } from "../config/config";

const Header = ({ data }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const pathname = location.pathname;

  const navigate = useNavigate();

  const handleNavigate = (value) => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }
    navigate(value);
  };
  return (
    <>
      <header className="animate animate--fade-down animate--start">
        <section className="as_full_container top_border_sec ">
          <div className="as_container">
            <div className="top_header_sec ">
              <div className="top_header_contact">
                <div>
                  <a href="tel:0118 969 9787">
                    {" "}
                    <i className="fa fa-phone" /> 0118 969 9787
                  </a>
                </div>
                <div>
                  <a href="mailto:sales@woodleysestateagents.com">
                    {" "}
                    <i className="fa fa-envelope" />
                    Sales@pioneers-residentialCo.uk
                  </a>
                </div>
              </div>
              <div className="header_social_icon"></div>
            </div>
          </div>
        </section>
        <section className="as_full_container main_bg">
          <div className="as_container main_logo_sec">
            <div className="main_header">
              <div className="as_logo padding_10">
                <a
                  className="as_logo_link"
                  onClick={() => {
                    handleNavigate(`/`);
                  }}
                  title="Woodleys  Estate Agents"
                >
                  <img src={s3BaseUrl + data?.header_logo} />
                </a>
              </div>
              <div className="as_menu_header">
                <div className="header_menu">
                  <ul className="menu_list">
                    <li className={`${pathname == "/" ? "menu_active" : ""}`}>
                      <a
                        onClick={() => {
                          handleNavigate(`/`);
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li
                      className={`${pathname == "/sales" ? "menu_active" : ""}`}
                    >
                      <a
                        onClick={() => {
                          handleNavigate(`/sales`);
                        }}
                      >
                        Properties for Sale
                      </a>
                    </li>
                    <li
                      className={`${
                        pathname == "/lettings" ? "menu_active" : ""
                      }`}
                    >
                      <a
                        onClick={() => {
                          handleNavigate(`/lettings`);
                        }}
                      >
                        Properties to Let
                      </a>
                    </li>
                    <li
                      className={`${
                        pathname == "/about-us" ? "menu_active" : ""
                      }`}
                    >
                      <a
                        onClick={() => {
                          handleNavigate(`/about-us`);
                        }}
                      >
                        About Us
                      </a>
                    </li>
                    <li
                      className={`${
                        pathname == "/contact" ? "menu_active" : ""
                      }`}
                    >
                      <a
                        onClick={() => {
                          handleNavigate(`/contact`);
                        }}
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="ten_temp_user">
                  <div className="user">
                    <login_in_menu className="drop_down ">
                      <a
                        className="estate1_login_name login_menu"
                        onClick={() => {
                          handleNavigate(`/login`);
                        }}
                      >
                        <i class="fa-solid fa-right-to-bracket mt-1 me-2"></i>{" "}
                        <span>
                          {localStorage.getItem("user") ? "Logout" : "Login"}
                        </span>{" "}
                      </a>
                    </login_in_menu>
                  </div>
                </div>
                <div className={`hamburger_menu ${open ? "open" : ""}`}>
                  <div
                    className="icon-left"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  />
                  <div
                    className="icon-right"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      {open && (
        <div className="menu_fly_button" style={{ display: "block" }}>
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sales">Properties for Sale</a>
            </li>
            <li>
              <a href="/lettings">Properties to Let</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
