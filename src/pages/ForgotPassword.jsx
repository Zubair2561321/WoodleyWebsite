import React, { useEffect, useState } from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { useNavigate } from "react-router-dom";
import Loader from "../Section/Loader";
import { get_website } from "../DAL/customapi";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    navigate(value);
  };

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
    <div>
      <Header data={data} />
      <div className="cont s--signup">
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--in">
              <h2 style={{ fontSize: 60 }}>⇢</h2>
            </div>
            <div
              className="img__btn"
              onClick={() => {
                handleNavigate(`/login`);
              }}
            >
              <span className="m--up1">Sign In</span>
            </div>
          </div>
          <div className="form sign-up" id="forgot_pwd">
            <h2>Forgot Password</h2>
            <div className="form-group">
              <label htmlFor="fg_email">Email</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="forgot_user_email"
                id="forgot_user_email"
                required=""
                placeholder="Enter the Email"
              />
            </div>
            <button
              type="button"
              className="submit"
              name="forgot_user_email"
              onclick="forgot_password_check()"
              id="btnLogin"
              onkeypress="return isEnterKeyPressed(event, 3)"
            >
              Send
            </button>
            <a className="responsive_inks" attr="sign_in">
              Remember your password?
            </a>
            <div>
              <span id="forgot_password_status" />
            </div>
          </div>
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
};

export default ForgotPassword;
