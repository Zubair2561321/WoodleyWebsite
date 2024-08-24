import React, { useEffect, useState } from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { get_website } from "../DAL/customapi";
import Loader from "../Section/Loader";
import { s3BaseUrl } from "../config/config";

const Sales = () => {
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
      <section
        id="detaild_page"
        className="as_home_search as_full_container bottom-65 position-relative"
      >
        <div className="background_texture" />
        <div className="as_container">
          <div className="find_sec col col_300px animate animate--fade-right animate--start">
            <div className="text_center">
              <div className="text_upper">Find Your</div>
              <div className="t_e_cap">Properties</div>
            </div>
          </div>
          <div className="col col_300px_re animate animate--fade-left animate--start">
            <form className="search-form">
              <div className="col col_100">
                {dataList?.services.length > 0 && (
                  <div className="col col_33">
                    <span
                      id="hint"
                      style={{
                        position: "absolute",
                        top: 15,
                        color: "red",
                        display: "none",
                      }}
                    >
                      {" "}
                      Select Category{" "}
                    </span>
                    <select className="form-control" id="propertytype">
                      <option selected="" value="43|45">
                        Sales
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
                {dataList?.property_types && (
                  <div className="col  col_33">
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
                <div className="col  col_33">
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
                <div className="col  col_33">
                  <select
                    className="form-control"
                    id="min_price"
                    name="min_price"
                  >
                    <option className="" value="" selected="">
                      Min Price
                    </option>
                    <option className="sale-price" value={50000}>
                      £50,000
                    </option>
                    <option className="sale-price" value={60000}>
                      £60,000
                    </option>
                  </select>
                </div>
                <div className="col  col_33">
                  <select
                    className="form-control"
                    id="max-price"
                    name="max_price"
                  >
                    <option className="" value="" selected="">
                      Max Price
                    </option>
                    <option className="sale-price" value={50000}>
                      £50,000
                    </option>
                  </select>
                </div>
                <div className="col  col_33">
                  <a
                    href="javascript:;"
                    className="search cmn_btn hover btn"
                    onclick="submit_search_form();"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    Search Property
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="feature_sec as_full_container bg_fff padding_50 mt-120">
        <div className="as_container">
          <div className="as_title col col_100 animate animate--fade-left animate--start">
            <div className="left_sec">
              <h1 className="title_sec animate animate--fade-down animate--start">
                Sales
              </h1>
              <div className="arrow_pagination" style={{ padding: "28px 0" }}>
                <a className="col arrow_bg arrow_bg_right" href="javascript:;">
                  <i className="arrow left" />
                  <div className="img_overlay" />
                </a>
                <a
                  className="col arrow_bg arrow_bg_left active"
                  href="javascript:;"
                  onclick="go_to_properties_list_page(2)"
                >
                  <i className="arrow right" />
                </a>
              </div>
            </div>
            <div className="right_sec views">
              <div className="co_col co_col_100 search_result">
                Search results: <span id="cout">1 - 12 of 93 Properties </span>
              </div>
              <br />
              <a className="active" href="javascript:;" onclick="viewtype(1)">
                <i className="icon gnbicon-grid grid_icon_sept" /> &nbsp; Grid
                View
              </a>
              <a className="" href="javascript:;" onclick="viewtype(2)">
                <i className="icon gnbicon-list grid_icon_sept" /> &nbsp; List
                View
              </a>
            </div>
          </div>
        </div>
        <div className="as_container " style={{ marginTop: 40 }}>
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
      <Footer data={data} />
    </>
  );
};

export default Sales;
