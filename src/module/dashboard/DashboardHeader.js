import { Button } from "components/button";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const DashboardHeaderStyles = styled.div`
  background-color: white;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .header-button {
    width: 200px;
  }
  .header {
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .logo {
    display: block;
    max-width: 70px;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
    list-style: none;
    margin-left: 40px;
  }
  .menu-link {
    font-size: 18px;
    font-weight: 600;
  }
`;

const DashboardHeader = () => {
  const menuLinks = [
    {
      url: "/",
      title: "Trang chủ",
    },
    {
      url: "/blog",
      title: "Blog",
    },
    {
      url: "/contact",
      title: "Liên hệ",
    },
  ];
  return (
    <DashboardHeaderStyles>
      <div className="container flex justify-between items-center">
        <div className="header">
          <img srcSet="/images/logo.png 4x" alt="" className="logo" />
          <ul className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <NavLink className="menu-link" to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-x-5">
          <Button to="/dashboard" className="header-button" height="52px">
            Thêm bài viết
          </Button>
          <div className="header-avatar">
            <img src="/images/avatar.jpg" alt="" />
          </div>
        </div>
      </div>
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;