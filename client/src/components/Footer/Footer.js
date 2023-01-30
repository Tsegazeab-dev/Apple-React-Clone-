import React, { Component } from "react";
import flag from "../../commonResource/images/icons/16.png";
import Links from "../props/Links";
import "./custom";
import FooterLinkProps from "./FooterLinkProps";
export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-wrapper">
          <div className="container">
            <div className="upper-text-container">
              <p>
                1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
                promotional pricing is after trade‑in of iPhone 8 Plus and
                iPhone X in good condition. Additional trade‑in values require
                purchase of a new iPhone, subject to availability and limits.
                Must be at least 18. Apple or its trade-in partners reserve the
                right to refuse or limit any Trade In transaction for any
                reason. In‑store trade‑in requires presentation of a valid,
                government-issued photo ID (local law may require saving this
                information). Sales tax may be assessed on full value of new
                iPhone. Additional terms from Apple or Apple’s trade-in partners
                may apply. Monthly pricing: Available to qualified customers and
                requires 0% APR, 24-month installment loan with Citizens One or
                Apple Card Monthly Installments and iPhone activation with AT&T,
                Sprint, T-Mobile, or Verizon. Taxes and shipping not included.
                Additional Apple Card Monthly Installments terms are in the
                <a
                  href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                  target="_blank"
                >
                  Customer Agreement
                </a>
                . Additional iPhone Payments terms are
                <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
                  here
                </a>
                .
              </p>
              <p>
                2. Subscription required.
                <br />
                <br />
                Magic Keyboard sold separately.
                <br />
                <br />
                Apple TV+ is $4.99/month after free trial. One subscription per
                Family Sharing group. Offer good for 3 months after eligible
                device activation. Plan automatically renews until cancelled.
                Restrictions and other{" "}
                <a href="https://www.apple.com/promo/">terms </a> apply.
              </p>
            </div>
            <div className="footer-links-wrapper row">
              <div className="links-wrapper-1 col-sm-12 col-md">
                <FooterLinkProps
                  title="Shop and Learn"
                  list={[
                    { link: "#", linkName: "Mac" },
                    { link: "#", linkName: "iPad" },
                    { link: "#", linkName: "iPhone" },
                    { link: "#", linkName: "Watch" },
                    { link: "#", linkName: "Tv" },
                    { link: "#", linkName: "Music" },
                    { link: "#", linkName: "Airpods" },
                    { link: "#", linkName: "HomePod" },
                    { link: "#", linkName: "iPod touch" },
                    { link: "#", linkName: "Accessories" },
                    { link: "#", linkName: "Gift Cards" },
                  ]}
                />
              </div>
              <div className="links-wrapper-2 col-sm-12 col-md">
                <FooterLinkProps
                  title="Services"
                  list={[
                    { link: "#", linkName: "Apple Music" },
                    { link: "#", linkName: "Apple News+" },
                    { link: "#", linkName: "Apple TV+" },
                    { link: "#", linkName: "Apple Arcade" },
                    { link: "#", linkName: "Apple Card" },
                    { link: "#", linkName: "iCloud" },
                  ]}
                />
                <FooterLinkProps
                  title="Account"
                  list={[
                    {
                      link: "#",
                      linkName: "Manage Your Apple ID",
                    },
                    {
                      link: "#",
                      linkName: "Apple Store Account",
                    },
                    { link: "#", linkName: "iCloud.com" },
                  ]}
                />
              </div>
              <div className="links-wrapper-3 col-sm-12 col-md">
                <FooterLinkProps
                  title="Apple Store"
                  list={[
                    { link: "#", linkName: "Find a Store" },
                    { link: "#", linkName: "Genius Bar" },
                    {
                      link: "#",
                      linkName: "Today at Apple",
                    },
                    { link: "#", linkName: "Apple Camp" },
                    { link: "#", linkName: "Field Trip" },
                    {
                      link: "#",
                      linkName: "Apple Store App",
                    },
                    {
                      link: "#",
                      linkName: "Refurbished and Clearance",
                    },
                    { link: "#", linkName: "Financing" },
                    {
                      link: "#",
                      linkName: "Apple Trade In",
                    },
                    { link: "#", linkName: "Order Status" },
                    {
                      link: "#",
                      linkName: "Shopping Help",
                    },
                  ]}
                />
              </div>
              <div className="links-wrapper-4 col-sm-12 col-md">
                <FooterLinkProps
                  title="For Business"
                  list={[
                    {
                      link: "#",
                      linkName: "Apple and Business",
                    },
                    {
                      link: "#",
                      linkName: "Shop for Business",
                    },
                  ]}
                />
                <FooterLinkProps
                  title="For Education"
                  list={[
                    {
                      link: "#",
                      linkName: "Apple and Education",
                    },
                    {
                      link: "#",
                      linkName: "Shop for College",
                    },
                  ]}
                />
                <FooterLinkProps
                  title="For Healthcare"
                  list={[
                    {
                      link: "#",
                      linkName: "Manage Your Apple ID",
                    },
                    {
                      link: "#",
                      linkName: "Apple Store Account",
                    },
                    { link: "#", linkName: "iCloud.com" },
                  ]}
                />
                <FooterLinkProps
                  title="For Government"
                  list={[
                    {
                      link: "#",
                      linkName: "Apple and Education",
                    },
                    {
                      link: "#",
                      linkName: "Shop for College",
                    },
                  ]}
                />
              </div>
              <div className="links-wrapper-5 col-sm-12 col-md">
                <FooterLinkProps
                  title="Apple Values"
                  list={[
                    { link: "#", linkName: "Find a Store" },
                    { link: "#", linkName: "Genius Bar" },
                    {
                      link: "#",
                      linkName: "Today at Apple",
                    },
                    { link: "#", linkName: "Apple Camp" },
                    { link: "#", linkName: "Field Trip" },
                    {
                      link: "#",
                      linkName: "Apple Store App",
                    },
                  ]}
                />
                <FooterLinkProps
                  title="About Apple"
                  list={[
                    { link: "#", linkName: "Find a Store" },
                    { link: "#", linkName: "Genius Bar" },
                    {
                      link: "#",
                      linkName: "Today at Apple",
                    },
                    { link: "#", linkName: "Apple Camp" },
                    { link: "#", linkName: "Field Trip" },
                    {
                      link: "#",
                      linkName: "Apple Store App",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="my-apple-wrapper">
              More ways to shop: <a href="www.apple.com">Find an Apple Store</a>{" "}
              or
              <a href="www.apple.com">other retailer</a> near you. Or call
              1-800-MY-APPLE.
            </div>
            <div className="copyright-wrapper row">
              <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                Copyright &copy; 2020 Apple Inc. All rights reserved.
              </div>
              <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
                <ul>
                  <Links
                    linkList={[
                      { name: "Privacy Policy", link: "#" },
                      { name: "Terms of Use", link: "#" },
                      { name: "Sales and Refunds", link: "#" },
                      { name: "Legal", link: "#" },
                      { name: "Site Map", link: "#" },
                    ]}
                  />
                </ul>
              </div>
              <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                <div className="flag-wrapper">
                  <img src={flag} />
                </div>
                <div className="footer-country-name">United States</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
