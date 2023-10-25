import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { toast } from 'react-toastify';
import { fetchImages } from 'services/image-api';

class App extends Component {
  state = {
    loading: false,
    error: null,
    images: [],
    per_page: 12,
    page: 1,
    q: '',
  };

  async componentDidMount() {
    const { per_page, page } = this.state;
    this.getImages({ per_page, page });
  }

  async componentDidUpdate(prevProps, prevState) {
    const { per_page, page, q } = this.state;
    if (q !== prevState.q) {
      this.getImages({ per_page, page, q });
    }
  }

  getImages = async params => {
    try {
      const { hits, totalHits } = await fetchImages(params);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
      }));
      toast.success(`We found ${totalHits} images`);
    } catch (error) {
      toast.error('Oops, something went wrong');
    }
  };

  handleSetSearch = q => {
    this.setState({ q, images: [], page: 1 });
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
        <Searchbar setSearch={this.handleSetSearch} />
        <ImageGallery images={images}></ImageGallery>
        <Button>Load more</Button>
      </div>
    );
  }
}

export default App;
