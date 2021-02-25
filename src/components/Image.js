import React, { Component } from 'react';
import axios from 'axios';

import Loader from './Loader';
import ImageContent from './ImageContent';

class Image extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      imageSizes: [],
      imageContent: null
    }
  }

  componentWillMount() {
    const contentUrl = `${process.env.REACT_APP_API_BASE}?method=flickr.photos.getInfo&api_key=${process.env.REACT_APP_API_KEY}&photo_id=${this.props.match.params.id}&format=json&nojsoncallback=true`;
    const sizesUrl = `${process.env.REACT_APP_API_BASE}?method=flickr.photos.getSizes&api_key=${process.env.REACT_APP_API_KEY}&photo_id=${this.props.match.params.id}&format=json&nojsoncallback=true`;
    
    axios.get(contentUrl)
      .then(response => {
        this.setState({
          imageContent: response.data.photo
        })

        axios.get(sizesUrl)
          .then(response => {
            this.setState({
              imageSizes: response.data.sizes.size,
              loading: false
            })
          })
          .catch(error => {
            console.log('Error getting image sizes', error);
          })
      })
      .catch(error => {
        console.log('Error getting image content', error);
      })
  }

  render() {
    return (
      <div className="image module">
        {
          (this.state.loading) ? <Loader /> :
            <ImageContent content={this.state.imageContent} sizes={this.state.imageSizes} />
        }
      </div>
    )
  }
}


export default Image;