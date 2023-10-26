export const ImageGalleryItem = ({
  webformatURL,
  type,
  largeImageURL,
  toggleModal,
}) => {
  return (
    <div>
      <li>
        <img
          style={{ objectFit: 'cover', cursor: 'pointer' }}
          src={webformatURL}
          alt={type}
          onClick={() => toggleModal(largeImageURL)}
          width="300"
          height="300"
        />
      </li>
    </div>
  );
};
