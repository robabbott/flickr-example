import React, { Component } from 'react';

import GalleryImg from './GalleryImg';

class GalleryImages extends Component {
  render() {
    const images = this.props.images.map((item) =>
      <GalleryImg key={item.id} image={item} />
    );

    return (
      <div className="gallery__images">
        {images}
      </div>
    )
  }
}

export default GalleryImages;