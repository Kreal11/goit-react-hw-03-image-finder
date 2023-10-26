import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { StyledImgListUl } from './ImageGallery.styled';

export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <div>
      <StyledImgListUl>
        {images?.map(image => (
          <ImageGalleryItem
            key={image.id}
            {...image}
            toggleModal={toggleModal}
          />
        ))}
      </StyledImgListUl>
    </div>
  );
};
