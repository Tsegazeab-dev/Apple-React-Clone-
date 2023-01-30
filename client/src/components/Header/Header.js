import React, { Component } from "react";
import logo from "../../commonResource/images/icons/logo-sm.png";
import search from "../../commonResource/images/icons/search-icon-sm.png";
import cart from "../../commonResource/images/icons/cart-sm.png";
import HeaderLinks from "./HeaderLinks";
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
      <div className="nav-wrapper fixed-top">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand mx-auto" to="/">
              <img src={logo} />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <HeaderLinks
                  linkList={[
                    { name: "Mac", link: "/mac" },
                    { name: "iphone", link: "/iphone" },
                    { name: "ipad", link: "/ipad" },
                    { name: "watch", link: "/watch" },
                    { name: "tv", link: "/tv" },
                    { name: "Music", link: "/music" },
                    { name: "Support", link: "/support" },
                  ]}
                />
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/search/">
                    <img src={search} />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/cart/">
                    <img src={cart} />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    );
  }
}
