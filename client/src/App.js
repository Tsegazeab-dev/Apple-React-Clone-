import React, { Component } from "react";
import "./commonResource/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Mac from "./Route-page/Mac-page/Mac";
import Iphone from "./Route-page/Iphone-page/Iphone";
import Ipad from "./Route-page/Ipad-page/Ipad";
import Error from "./Route-page/Error-page/Error";
import Details from "./Route-page/Details-page/Details";
import Tv from "./Route-page/Tv-page/Tv";
import Music from "./Route-page/Music-page/Music";
import Support from "./Route-page/Support-page/Support";
import Watch from "./Route-page/Watch-page/Watch";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:id" element={<Details />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
