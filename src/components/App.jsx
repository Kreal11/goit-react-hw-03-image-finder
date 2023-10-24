import { Component } from 'react';
// import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';

class App extends Component {
  #KEY = '39794314-b7170df023ca4db44fdda06f6';
  #BASE_URL = 'https://pixabay.com/api/';
  #END_POINT = '';
  per_page = 12;
  page = 1;

  state = {
    images: [],
    filter: '',
  };

  async componentDidMount() {
    try {
      const response = await axios.get(this.#BASE_URL, {
        params: {
          key: this.#KEY,
          per_page: this.per_page,
          page: this.page,
        },
      });
      if (response.data.hits) {
        this.setState({ images: response.data.hits });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { images } = this.state;
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
        {/* <Searchbar /> */}
        <ImageGallery images={images}></ImageGallery>
      </div>
    );
  }
}

export default App;
