import React from 'react';
import { Link } from 'react-router-dom';

const ImageContent = (props) => {
  const sizeLarge = props.sizes.filter(function(item) {
    return (item.label === 'Large 2048') ? item.label === 'Large 2048' : item.label === 'Original';
  })[0];

  const imageDate = new Date(props.content.dates.taken);

  return (
    <div className="image__content">
      <img
        className="image__content-img"
        src={sizeLarge.source}
        alt={props.content.title._content} />
      <div className="image__content-details">
        <h2 className="image__content-hdg hdg hdg--2">{props.content.title._content}</h2>
        <p className="image__content-author">by {props.content.owner.realname}</p>
        <p className="image__content-date">{imageDate.toString()}</p>
        <Link className="image__content-btn btn" to="/">Back to Gallery</Link>
      </div>
    </div>
  )
}


export default ImageContent;