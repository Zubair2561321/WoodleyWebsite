import React, { useEffect, useState } from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { get_website } from "../DAL/customapi";
import Loader from "../Section/Loader";
import { s3BaseUrl } from "../config/config";

const AboutUs = () => {
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const get_website_content = async () => {
    setIsLoading(true);
    const result = await get_website();
    if (result.code == 200) {
      setInputs(result.webpage_content.website_content);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const data = inputs?.homePage;
  const about_data = inputs?.aboutPage;

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
        className="title_bar"
        style={{
          backgroundImage: `url(${s3BaseUrl + about_data.header_image})`,
        }}
      >
        <div className="as_container ">
          <div className="title_sec">
            <h1 className="page_title">{about_data?.main_page_heading}</h1>
          </div>
        </div>
      </section>
      <section className="content_wrapper">
        <div className="as_container">
          <div
            dangerouslySetInnerHTML={{
              __html: about_data?.who_are_woodlays,
            }}
          ></div>
        </div>
      </section>
      <Footer data={data} />
    </>
  );
};

export default AboutUs;
