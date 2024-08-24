import React, { useEffect, useState } from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";
import { useNavigate } from "react-router-dom";
import { get_website, login_member } from "../DAL/customapi";
import Loader from "../Section/Loader";
import { useSnackbar } from "notistack";

const Login = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleNavigate = (value) => {
    navigate(value);
  };

  const [inputs, setInputs] = useState({});
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [dataList, setDataList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    formData.append("email", input.email);
    formData.append("password", input.password);

    const result = await login_member(formData);
    if (result.code === 200) {
      localStorage.setItem("user", JSON.stringify(result.member_user));
      enqueueSnackbar(result.message, { variant: "success" });
      setIsLoading(false);
    } else {
      enqueueSnackbar(result.message, { variant: "error" });
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

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
      <div className="cont">
        <div className="form sign-in" id="sign_in">
          <h1>Welcome</h1>
          <br />
          <form
            autoComplete="off"
            id="login_form"
            name="login_form"
            method="post"
          >
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input
                type="text"
                className="form-control form-control-lg rounded-0"
                name="email"
                value={input.email}
                onChange={handleChange}
                id="user_email"
                required=""
                placeholder="Enter the Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control form-control-lg rounded-0"
                id="user_password"
                name="password"
                value={input.password}
                onChange={handleChange}
                required=""
                autoComplete="new-password"
                placeholder="Enter the password"
              />
            </div>
            <button
              type="button"
              className="submit"
              id="btnLogin"
              onClick={handleSubmit}
            >
              Login
            </button>
            <a
              className="new_user_btn hide_links"
              onClick={() => {
                handleNavigate(`/sign-up`);
              }}
            >
              New user? Signup here
            </a>
          </form>
        </div>
        <div
          className="sub-cont"
          onClick={() => {
            handleNavigate(`/forgot-password`);
          }}
        >
          <div className="img">
            <div className="img__btn">
              <span className="m--up">Forgot Password</span>
            </div>
          </div>
        </div>
      </div>
      <Footer data={data} />
    </div>
  );
};

export default Login;
