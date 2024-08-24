import { invokeApi } from "./invokeApi";

export const get_website = async () => {
  const requestObj = {
    path: `api/website_content`,
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};

export const signup_member = async (data) => {
  const requestObj = {
    path: `api/member/signup_member`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const login_member = async (data) => {
  const requestObj = {
    path: `api/member/login_member`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _delete_support_ticket_comment_api = async (id) => {
  const requestObj = {
    path: `api/support_ticket_comment/delete_support_ticket_comment/${id}`,
    method: "DELETE",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};
