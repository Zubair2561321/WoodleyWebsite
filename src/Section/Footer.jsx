import React from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = ({ data }) => {
  return (
    <footer>
      <div className="as_container">
        <div className="footer_widget">
          <div className="widget_item">
            <h4 className="widget_title">{data?.get_in_touch}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.get_in_touch_des,
              }}
            ></div>
          </div>
          <div className="widget_item">
            <h4 className="widget_title">{data?.opening_hours}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.opening_hours_des,
              }}
            ></div>
          </div>
          <div className="widget_item">
            <h4 className="widget_title">{data?.useful_pages}</h4>
            <ul className="widget_list">
              <li>
                <a href="/sales" title="Property for Sale">
                  Property for Sale
                </a>
              </li>
              <li>
                <a href="/lettings" title="Property to Rent">
                  Property to Rent
                </a>
              </li>
              <li>
                <a href="/contact" title="Contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" title="Terms">
                  Terms
                </a>
              </li>
              <li>
                <a href="/" target="_blank" title="Client money protect">
                  Client money protect
                </a>
              </li>
              <li>
                <a href="/" target="_blank" title="Complaints Procedure">
                  Complaints procedure
                </a>
              </li>
              <li>
                <a href="/" title="Privacy policy">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p className="copy_para">{data?.all_rigths_reserved_text}</p>
      </div>
      <a
        className="back_to_top"
        onClick={scrollToTop}
        style={{ visibility: "visible", opacity: 1 }}
      >
        {" "}
        <i className="fa fa-level-up" />{" "}
      </a>
    </footer>
  );
};

export default Footer;
