import React, { useEffect, useState } from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { get_website } from "../DAL/customapi";
import { s3BaseUrl } from "../config/config";
import Loader from "../Section/Loader";

const LandingPage = () => {
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

  useEffect(() => {
    get_website_content();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header data={data} />
      <section className="home_banner_sec">
        <div className="home_video_holder">
          <div className="banner_img">
            <div className="banner_cont">
              <h2 className="bnr_subhd">{data?.main_page_heading}</h2>
              <a class="rm_btn" title="Book a valuation today">
                {data?.main_page_button_text}
              </a>
            </div>
          </div>
          <video id="backgroundvid">
            <source
              src="https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/website/woodleys/79d8eb7b04e488d6bddf9816a1dcbdd1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <section
        id="next_sec"
        className="as_home_search as_full_container bg-transparent"
      >
        <div className="as_container">
          <div className="search_sec col col_300px_re ">
            <form className="search-form">
              <div className="search_form_grid">
                {dataList?.services.length > 0 && (
                  <div className="search_form_item">
                    <span
                      id="hint"
                      style={{
                        position: "absolute",
                        top: "-23px",
                        color: "red",
                        display: "none",
                      }}
                    >
                      {" "}
                      Select Category
                    </span>
                    <select className="form-control" id="propertytype">
                      <option selected="" value="">
                        Select Category
                      </option>
                      {dataList?.services.map((item, index) => {
                        return (
                          <option key={index} value={index}>
                            {item.title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
                {dataList.property_types.length > 0 && (
                  <div className="search_form_item">
                    <div id="property_type_outer">
                      <select
                        id="filter_attribute_1"
                        name="filter_attribute[categorical][1]"
                        className="field_item  drop-down form-control "
                      >
                        <option value="">Choose Property Type</option>
                        {dataList?.property_types.map((item, index) => {
                          return (
                            <option key={index} value={index}>
                              {item.title}
                            </option>
                          );
                        })}
                      </select>{" "}
                    </div>
                  </div>
                )}
                <div className="search_form_item">
                  <select
                    className="form-control"
                    id="min-beds"
                    name="filter_attribute[numeric][2][min]"
                  >
                    <option value="" selected="selected">
                      Min Beds
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                  </select>
                </div>
                <div className="search_form_item">
                  <select
                    className="form-control"
                    id="min_price"
                    name="min_price"
                  >
                    <option value="" selected="selected">
                      Min Price
                    </option>

                    <option className="rent-price" value={50}>
                      £50
                    </option>
                    <option className="rent-price" value={100}>
                      £100
                    </option>
                  </select>
                </div>
                <div className="search_form_item">
                  <select
                    className="form-control"
                    id="max-price"
                    name="max_price"
                  >
                    <option className="" value="" hidden="">
                      Max Price
                    </option>
                    <option className="rent-price" value={50}>
                      £50
                    </option>
                    <option className="rent-price" value={100}>
                      £100
                    </option>
                  </select>
                </div>
                <div className="search_form_item">
                  <a className="search cmn_btn hover btn">Search Property</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="about_us_sec as_full_container padd bg-gray">
        <div className="as_container ">
          <div className="about_grid">
            <div className="about_grid_item animate animate--fade-right animate--start">
              <img
                src={s3BaseUrl + data?.wellcome_image}
                className="about_img"
              />
            </div>
            <div className="about_grid_item animate animate--fade-left animate--start">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.wellcome_state_description,
                }}
              ></div>
              <a className="cmn_btn hover mt_20 btn ">Read more</a>
            </div>
          </div>
        </div>
      </section>
      <section className="quick_access as_full_container  padding_50">
        <div className="as_container">
          <div className="as_title col col_100">
            <div className="col col_100 animate animate--fade-right animate--start">
              <h2 className="sub_head">{data?.our_services_heading_text}</h2>
            </div>
          </div>
        </div>
        <div className="as_container asset" style={{ marginTop: 20 }}>
          {dataList?.services.length > 0 &&
            dataList?.services.map((item, index) => {
              return (
                <div
                  className="col col_50 animate animate--fade-right animate--start"
                  key={index}
                >
                  <div
                    className="quick_access_img col pull-left first-sec"
                    style={{
                      backgroundImage: `url(${s3BaseUrl + item.image})`,
                    }}
                  >
                    <figure className="effect-layla">
                      <figcaption>
                        <h2>{item.title}</h2>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <section className="feature_sec as_full_container bg-gray padd dis_block">
        <div className="as_container ">
          <div className="as_title col col_100">
            <div className="col col_80">
              <h2 className="sub_head">
                {data?.feature_properties_services_heading_text}
              </h2>
            </div>
            <div className="col col_20">
              <div className="col col_40 detail_page_sec">
                <button
                  className="slick-prev rent_prev slick-arrow slick-hidden"
                  aria-disabled="true"
                  tabIndex={-1}
                />
                <button
                  className="slick-next rent_next slick-arrow slick-hidden"
                  aria-disabled="true"
                  tabIndex={-1}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="as_container feature_prop_slider animate animate--fade-down slick-initialized slick-slider slick-dotted animate--start"
          style={{ marginTop: 20, display: "block" }}
        >
          <div className="row justify-content-center">
            {dataList?.properties.length > 0 &&
              dataList?.properties.map((item, index) => {
                console.log(s3BaseUrl + item.images[0].image);
                return (
                  <div className="col-12 col-md-4 mt-3" key={index}>
                    <div className="col feature_div bg_fff float_left">
                      <a
                        className="feature_img"
                        style={{
                          backgroundImage: `url(${
                            s3BaseUrl + item.images[0].image
                          })`,
                        }}
                        tabIndex={0}
                      >
                        <div className="img_overlay">
                          <div className="ribbon_text">
                            {item.short_description}
                          </div>
                        </div>
                      </a>
                      <a tabIndex={0}>
                        <div className="feature_content">
                          <h4 className="fe_title">{item.title}</h4>
                          <div className="col pro_description">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.detail_description,
                              }}
                            ></div>
                          </div>
                        </div>
                        <div className="col col_100 bg-blue amenities">
                          <div className="col col_33">
                            <i class="fa-solid fa-bed"></i> {item.total_beds}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="app_sec as_full_container padd">
        <div className="as_container ">
          <div className="app_grid">
            <div className="app_grid_item">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.download_section_description,
                }}
              ></div>
            </div>
            <div className="app_grid_item">
              <img
                className="app_image animate animate--fade-left animate--start"
                src={s3BaseUrl + data?.download_section_image}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="valuation_id" className=" as_full_container padding_80">
        <div className="as_container">
          <div className="section row">
            <div className="image_1 col-md-5 animate animate--fade-right animate--start">
              <img src={s3BaseUrl + data?.how_much_property_worth_image} />
            </div>
            <div className="col-md-7 animate animate--fade-left animate--start">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.how_much_property_description,
                }}
              ></div>
              <a className="cmn_btn hover mt_20 btn" href="request_valuation">
                {data?.how_much_property_worth_button_text}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="register_id"
        className="register_class as_full_container padding_80"
      >
        <div className="as_container">
          <div className="section row">
            <div className="col-md-7 animate animate--fade-left animate--start">
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.register_with_us_description,
                }}
              ></div>
              <a className="cmn_btn hover mt_20 btn" href="/user_register">
                {data?.register_with_us_button_text}
              </a>
            </div>
            <div className="image_1 col-md-5 animate animate--fade-right animate--start">
              <img src={s3BaseUrl + data?.register_with_us_image} />
            </div>
          </div>
        </div>
      </section>
      <Footer data={data} />
    </>
  );
};

export default LandingPage;
