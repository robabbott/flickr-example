import React, { Component } from 'react';
import axios from 'axios';

import GalleryImages from './GalleryImages';

class Gallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      images: [],
    }
  }

  componentWillMount() {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=cancun&per_page=12&format=json&nojsoncallback=true`;
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
          (this.state.loading) ? <p>Loading</p> :
            <GalleryImages images={this.state.images} />
        }
      </div>
    )
  }
}


export default Gallery;