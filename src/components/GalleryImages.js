import React, { Component } from 'react';

class GalleryImages extends Component {
  render() {
    const images = this.props.images.map((item) =>
      <img
        key={item.id}
        src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
        alt={item.title} />
    );

    return (
      <div className="gallery__images">
        {images}
      </div>
    )
  }
}

export default GalleryImages;