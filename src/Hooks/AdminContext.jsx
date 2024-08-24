import React, { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

export const useAdminContext = () => useContext(AdminContext);
export function ContextAdmin({ children }) {
  //
  const [userInfo, setUserInfo] = useState(null);
  const [adminSettingList, setAdminSettingList] = useState({});
  const [navItemsList, setNavItemList] = useState([]);
  //

  const handleSettingList = (value) => {
    setAdminSettingList(value);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, [localStorage.getItem("user")]);
  //

  const collection = {
    setUserInfo,
    userInfo,
    handleSettingList,
    adminSettingList,
    setNavItemList,
    navItemsList,
  };
  return (
    <AdminContext.Provider value={collection}>{children}</AdminContext.Provider>
  );
}
