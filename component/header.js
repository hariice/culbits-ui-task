import React, { useState } from "react";
import "../styles/header.css";
import {
  FaHome,
  FaInfoCircle,
  FaSignOutAlt,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaShopify } from "react-icons/fa6";
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  const onToggleClick = () => {
    setIsVisible(!isVisible);
  };

  const onNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="header-main">
      <img
        src="https://img.freepik.com/premium-vector/vector-colorful-logo-design_1002026-45.jpg?w=740"
        className="logo-img"
        height={50}
        width={50}
      />
      <div className="header-container">
        <div className="menu-icon" onClick={onToggleClick}>
          <FaBars />
        </div>
        <div class="search-container">
          <input type="text" placeholder="Search.." name="search" />
          <button type="submit">
            <FaSearch />
          </button>
        </div>
        <ul className={isVisible ? "menu-open" : ""} onClick={() => setIsVisible(false)}>
          <li onClick={() => onNavigate("/home")}>
            <FaHome />
            Home
          </li>
          <li onClick={() => onNavigate("/products")}><FaShopify /> Products</li>
          <li>
            <FaInfoCircle />
            About
          </li>
          <li onClick={() => onNavigate("/")}>
            <FaSignOutAlt />
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
