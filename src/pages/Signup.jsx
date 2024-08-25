import React, { useEffect, useState } from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { useNavigate } from "react-router-dom";
import { get_website, signup_member } from "../DAL/customapi";
import Loader from "../Section/Loader";
import { useSnackbar } from "notistack";

const Signup = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleNavigate = (value) => {
    navigate(value);
  };

  const [inputs, setInputs] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("password", input.password);

    const result = await signup_member(formData);
    if (result.code === 200) {
      enqueueSnackbar(result.message, { variant: "success" });
      setIsLoading(false);
      navigate(`/login`);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
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
      <div className="cont new_user">
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
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form new_user_sec" id="sign_up">
            <form id="signup_form">
              <h2>Register</h2>
              <div className="form-group">
                <label htmlFor="user_email">Name *</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-0"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  id="user_nickname"
                  required=""
                  placeholder="Enter the name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fg_email">Email *</label>
                <input
                  type="text"
                  className="form-control form-control-lg rounded-0"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  id="email_address"
                  required=""
                  placeholder="Enter the Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fg_email">Password *</label>
                <input
                  type="password"
                  className="form-control form-control-lg rounded-0"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  id="phone_number"
                  required=""
                  placeholder="Enter Password"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="confirm_age"
                  className="mt-3"
                  required
                />
                <span lang="en">
                  {" "}
                  I have read and agreed your Privacy Notice at{" "}
                  <a style={{ color: "#fff" }}>
                    <b> Privacy policy </b>
                  </a>
                </span>
              </div>
              <button
                type="button"
                className="submit"
                id="btnLogin"
                onClick={handleSubmit}
                style={{ margin: "20px auto 10px auto" }}
              >
                Signup
              </button>
              <a className="responsive_inks" attr="sign_in">
                Registered already?
              </a>
              <div>
                <span id="signup_status" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer data={data} />
    </>
  );
};

export default Signup;
