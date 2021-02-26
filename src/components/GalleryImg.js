import React from 'react';
import { Link } from 'react-router-dom';

const GalleryImg = (props) => {
  const img = props.image;

  return (
    <div className="gallery__images-item">
      <Link className="gallery__item" to={"/photos/" + img.id}>
        <h3 className="gallery__item-hdg hdg--3">{img.title}</h3>
        <img
          className="gallery__item-img"
          src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
          alt={img.title} />
      </Link>
    </div>
  )
}

export default GalleryImg;