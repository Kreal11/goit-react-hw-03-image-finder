import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Searchbar } from './Searchbar/Searchbar';
import { toast } from 'react-toastify';
import { fetchImages } from 'services/image-api';

class App extends Component {
  state = {
    loading: false,
    error: null,
    per_page: 12,
    page: 1,
    images: [],
    filter: '',
  };

  async componentDidMount() {
    const { per_page, page } = this.state;
    this.getImages({ per_page, page });
  }

  getImages = async ({ per_page, page }) => {
    try {
      const images = await fetchImages({ per_page, page });
      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
      }));
      toast.success(`We found ${images.totalHits} images`);
    } catch (error) {
      toast.error('Oops, something went wrong');
    }
  };

  render() {
    const { images } = this.state;
    return (
      <div
        style={{
          padding: 20,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <Searchbar /> */}
        <ImageGallery images={images}></ImageGallery>
        <Button>Load more</Button>
      </div>
    );
  }
}

export default App;
