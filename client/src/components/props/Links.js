import React, { Component } from 'react'

export class Links extends Component {
  render() {
    return (
      this.props.linkList
      .map((item, index) => (
        <li key={index}><a href={item.link}>{item.name}</a></li>
      ))
    )
  }
}

export default Links;