import React, { Component } from 'react';

class GalleryImg extends Component {
  render() {
    const img = this.props.image;

    return (
      <div className="gallery__images-item">
        <a className="gallery__item" href={"/photo/" + img.id}>
          <h3 className="gallery__item-hdg hdg--3">{img.title}</h3>
          <img
            className="gallery__item-img"
            src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
            alt={img.title} />
        </a>
      </div>
    )
  }
}

export default GalleryImg;