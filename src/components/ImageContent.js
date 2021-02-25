import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ImageContent extends Component {
  render() {
    const sizeLarge = this.props.sizes.filter(function(item) {
      return item.label === 'Large 2048';
    })[0];

    const imageDate = new Date(this.props.content.dates.taken);

    return (
      <div className="image__content">
        <img
          className="image__content-img"
          src={sizeLarge.source}
          alt={this.props.content.title._content} />
        <div className="image__content-details">
          <h2 className="image__content-hdg hdg hdg--2">{this.props.content.title._content}</h2>
          <p className="image__content-author">by {this.props.content.owner.realname}</p>
          <p className="image__content-date">{imageDate.toString()}</p>
          <Link className="image__content-btn btn" to="/">Back to Gallery</Link>
        </div>
      </div>
    )
  }
}


export default ImageContent;