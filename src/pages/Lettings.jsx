import React, { useEffect, useRef, useState } from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { get_website } from "../DAL/customapi";
import Loader from "../Section/Loader";
import { s3BaseUrl } from "../config/config";

const Lettings = () => {
  const [inputs, setInputs] = useState({});
  const [dataList, setDataList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const resultsRef = useRef(null);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    propertyType: "",
    minBeds: "",
    minPrice: "",
    maxPrice: "",
  });

  const get_website_content = async () => {
    setIsLoading(true);
    const result = await get_website();
    if (result.code == 200) {
      setInputs(result.webpage_content.website_content);
      setFilteredProperties(result?.properties);
      setDataList(result);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value, "id, valueid, value");
    setFilters({ ...filters, [id]: value });
  };

  const handleSearchClick = () => {
    let filtered = dataList.properties;
    console.log("first");
    if (filters.category) {
      filtered = filtered.filter((item) => item.category === filters.category);
    }
    if (filters.propertyType) {
      filtered = filtered.filter(
        (item) => item.property_type === filters.propertyType
      );
    }
    if (filters.minBeds) {
      filtered = filtered.filter(
        (item) => item.total_beds >= parseInt(filters.minBeds, 10)
      );
    }
    if (filters.minPrice) {
      filtered = filtered.filter(
        (item) => item.min_price >= parseInt(filters.minPrice, 10)
      );
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(
        (item) => item.max_price <= parseInt(filters.maxPrice, 10)
      );
    }

    setFilteredProperties(filtered);
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
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
                    <select
                      className="form-control"
                      id="category"
                      value={filters.category}
                      onChange={handleFilterChange}
                    >
                      <option value="">Select Category</option>
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
                        id="propertyType"
                        className="field_item  drop-down form-control "
                        name="propertyType"
                        value={filters.propertyType}
                        onChange={handleFilterChange}
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
                {dataList?.properties.length > 0 && (
                  <div className="col  col_33">
                    <select
                      className="form-control"
                      id="minBeds"
                      name="minBeds"
                      value={filters.minBeds}
                      onChange={handleFilterChange}
                    >
                      <option value="">Min Beds</option>
                      {dataList?.properties.map((item, index) => (
                        <option key={index} value={item.total_beds}>
                          {item.total_beds}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {dataList?.properties.length > 0 && (
                  <div className="col  col_33">
                    <select
                      className="form-control"
                      id="minPrice"
                      name="minPrice"
                      value={filters.minPrice}
                      onChange={handleFilterChange}
                    >
                      <option value="">Min Price</option>
                      {dataList?.properties.map((item, index) => (
                        <option key={index} value={item.min_price}>
                          £{item.min_price}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {dataList?.properties.length > 0 && (
                  <div className="col  col_33">
                    <select
                      className="form-control"
                      id="maxPrice"
                      name="maxPrice"
                      value={filters.maxPrice}
                      onChange={handleFilterChange}
                    >
                      <option value="">Max Price</option>
                      {dataList?.properties.map((item, index) => (
                        <option key={index} value={item.max_price}>
                          £{item.max_price}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="col  col_33">
                  <a
                    className="search cmn_btn hover btn"
                    style={{ width: "100%" }}
                    onClick={handleSearchClick}
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
                Lettings
              </h1>
            </div>
          </div>
        </div>
        <div
          className="as_container "
          style={{ marginTop: 40 }}
          ref={resultsRef}
        >
          <div className="row justify-content-center">
            {filteredProperties.length > 0 &&
              filteredProperties.map((item, index) => {
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

export default Lettings;
