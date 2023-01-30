import React, { Component } from 'react'

export default class LinkWrapper extends Component {
  render() {
    return (
        <div className="links-wrapper">
        <ul>
          <li><a href={this.props.learnLink}>Learn More</a></li>
          <li><a href={this.props.orderLink}>{this.props.order}</a></li>
        </ul>
      </div>
    )
  }
}
