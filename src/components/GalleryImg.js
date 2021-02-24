import React, { Component } from 'react';

class GalleryImg extends Component {
  render() {
    const img = this.props.image;

    return (
      <div className="gallery__images-item">
        <div className="gallery__item">
          <h3 class="gallery__item-hdg hdg--3">{img.title}</h3>
          <img
            className="gallery__item-img"
            key={img.id}
            src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
            alt={img.title} />
        </div>
      </div>
    )
  }
}

export default GalleryImg;