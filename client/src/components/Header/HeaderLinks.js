import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class HeaderLinks extends Component {
  render() {
    return (
      this.props.linkList
      .map((item, index) => (
        <li className="nav-item" key={index}><Link className="nav-link js-scroll-trigger" to={item.link}>{item.name}</Link></li>
      ))
    )
  }
}

