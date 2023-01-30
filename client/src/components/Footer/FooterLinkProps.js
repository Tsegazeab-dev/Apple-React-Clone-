import React, { Component } from 'react'

export class FooterLinkProps extends Component {
  render() {
    return (
      <>
       <h3>{this.props.title}</h3>
          <ul>
            {
            this.props.list
            .map((item, index) => (
                <li key={index}><a href={item.link}>{item.linkName}</a></li>
                ))
            
            }
            </ul>
      </>
    )
  }
}

export default FooterLinkProps;

// N.B - inside the map callback function i used () insetead of return