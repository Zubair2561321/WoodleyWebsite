import React, { useEffect, useState } from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { get_website } from "../DAL/customapi";
import Loader from "../Section/Loader";
import { s3BaseUrl } from "../config/config";

const Contact = () => {
  const [inputs, setInputs] = useState({});
  const [dataList, setDataList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const get_website_content = async () => {
    setIsLoading(true);
    const result = await get_website();
    if (result.code == 200) {
      setInputs(result.webpage_content.website_content);
      setDataList(result);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const data = inputs?.homePage;
  const about_data = inputs?.contactUs;

  useEffect(() => {
    get_website_content();
  }, []);

  console.log(about_data, "about_dataabout_data");

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Header data={data} />
      <div
        class="title_bar"
        style={{
          backgroundImage: `url(${s3BaseUrl + about_data?.header_image})`,
        }}
      >
        <div class="as_container ">
          <div class="title_sec">
            <h1 class="page_title float_left">
              {about_data?.main_page_heading}
            </h1>
          </div>
        </div>
      </div>
      <div className="contact_us_sec">
        <div className="as_container ">
          <h2 className="sub_head">{about_data?.wellcome_heading}</h2>
          <h3 className="widget_title">{about_data?.about_us_text}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: about_data?.who_are_woodlays,
            }}
          ></div>
          <div className="contact_detail_sec">
            <div
              className="contact_map float_left leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom"
              id="map_canvas"
              tabIndex={0}
              style={{ position: "relative" }}
            >
              <div
                className="leaflet-pane leaflet-map-pane"
                style={{ transform: "translate3d(-8px, 0px, 0px)" }}
              >
                <div className="leaflet-pane leaflet-tile-pane">
                  <div
                    className="leaflet-layer "
                    style={{ zIndex: 1, opacity: 1 }}
                  >
                    <div
                      className="leaflet-tile-container leaflet-zoom-animated"
                      style={{
                        zIndex: 18,
                        transform: "translate3d(0px, 0px, 0px) scale(1)",
                      }}
                    >
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32604/21810.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(168px, 155px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32604/21811.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(168px, 411px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32603/21810.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(-88px, 155px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32605/21810.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(424px, 155px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32603/21811.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(-88px, 411px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32605/21811.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(424px, 411px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32604/21809.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(168px, -101px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32604/21812.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(168px, 667px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32603/21809.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(-88px, -101px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32605/21809.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(424px, -101px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32603/21812.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(-88px, 667px, 0px)",
                          opacity: 1,
                        }}
                      />
                      <img
                        alt=""
                        role="presentation"
                        src="https://tile.openstreetmap.org/16/32605/21812.png"
                        className="leaflet-tile leaflet-tile-loaded"
                        style={{
                          width: 256,
                          height: 256,
                          transform: "translate3d(424px, 667px, 0px)",
                          opacity: 1,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="leaflet-pane leaflet-shadow-pane" />
                <div className="leaflet-pane leaflet-overlay-pane" />
                <div className="leaflet-pane leaflet-marker-pane">
                  <img
                    src="https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/website/woodleys/4cbdc546afc18f9af5aaa95c57bfc7e3.png"
                    className="leaflet-marker-icon leaflet-zoom-animated leaflet-interactive"
                    alt=""
                    tabIndex={0}
                    style={{
                      marginLeft: "-22.5px",
                      marginTop: 0,
                      width: 45,
                      transform: "translate3d(265px, 367px, 0px)",
                      zIndex: 367,
                    }}
                  />
                </div>
                <div className="leaflet-pane leaflet-tooltip-pane" />
                <div className="leaflet-pane leaflet-popup-pane">
                  <div
                    className="leaflet-popup  leaflet-zoom-animated"
                    style={{
                      opacity: 1,
                      transform: "translate3d(265px, 367px, 0px)",
                      bottom: "-7px",
                      left: "-171px",
                    }}
                  >
                    <div className="leaflet-popup-content-wrapper">
                      <div
                        className="leaflet-popup-content"
                        style={{ width: 301 }}
                      >
                        <h5
                          style={{
                            width: "100%",
                            textAlign: "center",
                            fontSize: 14,
                            fontWeight: 600,
                          }}
                        >
                          Woodleys Estate Agents
                          <p
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              textAlign: "center",
                              width: "100%",
                            }}
                          >
                            132 Loddon Bridge Road, Woodley, Berkshire, RG5 4AW
                          </p>
                        </h5>
                      </div>
                    </div>
                    <div className="leaflet-popup-tip-container">
                      <div className="leaflet-popup-tip" />
                    </div>
                    <a className="leaflet-popup-close-button" href="#close">
                      ×
                    </a>
                  </div>
                </div>
                <div
                  className="leaflet-proxy leaflet-zoom-animated"
                  style={{
                    transform:
                      "translate3d(8.34672e+06px, 5.58357e+06px, 0px) scale(32768)",
                  }}
                />
              </div>
              <div className="leaflet-control-container">
                <div className="leaflet-top leaflet-left">
                  <div className="leaflet-control-zoom leaflet-bar leaflet-control">
                    <a
                      className="leaflet-control-zoom-in"
                      href="#"
                      title="Zoom in"
                      role="button"
                      aria-label="Zoom in"
                    >
                      +
                    </a>
                    <a
                      className="leaflet-control-zoom-out"
                      href="#"
                      title="Zoom out"
                      role="button"
                      aria-label="Zoom out"
                    >
                      −
                    </a>
                  </div>
                </div>
                <div className="leaflet-top leaflet-right" />
                <div className="leaflet-bottom leaflet-left" />
                <div className="leaflet-bottom leaflet-right">
                  <div className="leaflet-control-attribution leaflet-control">
                    <a
                      href="https://leafletjs.com"
                      title="A JS library for interactive maps"
                    >
                      Leaflet
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="enquiry_form float_left">
              <h4>{about_data?.contact_form_heading}</h4>
              <form id="contact_form">
                <input
                  type="hidden"
                  name="form_name"
                  defaultValue="Enquiry Form"
                />
                <div className="input_flex_dual">
                  <form_feild>
                    <input
                      type="text"
                      id="name_holder"
                      name="first_name"
                      placeholder="First name*"
                    />
                  </form_feild>
                  <form_feild>
                    <input
                      type="text"
                      id="last_name_holder"
                      name="last_name"
                      placeholder="Last name"
                    />
                  </form_feild>
                </div>
                <form_feild>
                  <input
                    type="email"
                    id="email_holder"
                    name="email"
                    placeholder="Email*"
                  />
                </form_feild>
                <form_feild>
                  <input
                    type="text"
                    id="phone_holder"
                    name="Phone"
                    onkeypress="return isNumberKey(event)"
                    placeholder="Phone*"
                  />
                </form_feild>
                <form_feild>
                  <input
                    type="text"
                    id="postcode_holder"
                    name="postcode"
                    placeholder="postcode"
                  />
                </form_feild>
                <form_feild>
                  <textarea
                    id="message_holder"
                    rows={8}
                    cols={50}
                    name="message"
                    placeholder="Message*"
                    defaultValue={""}
                  />
                </form_feild>
                <div className="flex_check ">
                  <input
                    type="checkbox"
                    name="Acceptance"
                    defaultValue=" I have read and agree to the Terms and Conditions and Privacy Policy"
                    id="acceptance_id"
                    className=""
                  />
                  <label htmlFor="acceptance_id" id="text_error" className="">
                    {about_data?.term_text}
                  </label>
                </div>
                <div className="submit_btn">
                  <a
                    type="submit"
                    className="text-white"
                    data-text="Send"
                    name="button "
                  >
                    Send message
                  </a>
                </div>
                <div style={{ display: "inline-block" }} id="contact_status" />
              </form>
            </div>
          </div>
          <div className="contact_details ">
            <div className="contact_detail_wrapper">
              <div className="contact_address_sec">
                <h4 className="widget_title">{about_data?.location_text}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: about_data?.location_des,
                  }}
                ></div>
              </div>
              <div className="contact_address_sec">
                <h4 className="widget_title">{about_data?.sales_text}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: about_data?.sales_des,
                  }}
                ></div>
              </div>
              <div className="contact_address_sec">
                <h4 className="widget_title">{about_data?.letting_text}</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: about_data?.letting_des,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer data={data} />
    </>
  );
};

export default Contact;
