import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

import { useAuth } from "../../contexts/authContext";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const NAV_ITEMS = [
    {
      title: "BRANDS A-Z",
      link: "/brands",
      id: 1,
    },
    {
      title: "WATHCES",
      link: "/products",
      id: 2,
    },
    {
      title: "STORES",
      link: "*",
      id: 3,
    },
    {
      title: "NEWS",
      link: "*",
      id: 4,
    },
    {
      title: "CONTACTS",
      link: "*",
      id: 5,
    },
  ];
  return (
    <>
      <nav>
        <div>
          {email ? (
            <Link to="/auth">
              <button className="sign-btn" onClick={handleLogout}>
                Log out
              </button>
            </Link>
          ) : null}
          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">Log in</button>
            </Link>
          )}
        </div>
      </nav>
      <div className="header">
        <div></div>
        <Link to="/">
          <img
            width="200px"
            src="https://content.thewosgroup.com/wosus/logo/wos_since_1924_uk_blk_notag.svg"
            alt=""
          />
        </Link>
        <div>
          <Badge count={5}>
            <ShoppingCartOutlined
              style={{ fontSize: "30px", cursor: "pointer" }}
            />
          </Badge>
        </div>
      </div>
      <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link to={item.link} className={location.pathname === item.link ? "navbar__item-active" : "navbar__item"}>
            {item.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;