import { Component } from 'react';
// import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {' '}
        <Searchbar />
        <ImageGallery></ImageGallery>
      </div>
    );
  }
}

export default App;
