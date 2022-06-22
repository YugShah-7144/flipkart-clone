import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">

      {/* Flipkart logo */}
      <div className="header__first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="flipkart logo"
        />
        <div className="header__first1">
          <span
            style={{
              fontSize: "11px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#f9e107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt=""
            />
          </span>
        </div>
      </div>

      {/* Search Area */}
      <div className="header__second">
        <input placeholder="Search for products, brands and more..." type="text" />
        <SearchIcon />
      </div>

      {/* Login Button */}
      <div className="header__third">
        <button>Login</button>
      </div>

      {/* Cart */}
      <div className="header__fourth">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;