import React, { Component } from 'react';
import axios from 'axios';

import Loader from './Loader';
import GalleryImages from './GalleryImages';

class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      images: [],
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_API_BASE}?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=cancun&sort=interestingness-desc&per_page=15&format=json&nojsoncallback=true`;
    
    axios.get(url)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error getting images', error);
      })
  }

  render() {
    return (
      <div className="gallery module">
        {
          (this.state.loading) ? <Loader/> :
            <GalleryImages images={this.state.images} />
        }
      </div>
    )
  }
}


export default Gallery;