import React from 'react';
import GalleryImg from './GalleryImg';

const GalleryImages = (props) => {
  const images = props.images.map((item) =>
    <GalleryImg key={item.id} image={item} />
  );

  return (
    <div className="gallery__images">
      {images}
    </div>
  )
}

export default GalleryImages;