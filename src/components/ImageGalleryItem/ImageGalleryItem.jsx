export const ImageGalleryItem = ({ ...image }) => {
  const { webformatURL, type } = image;
  return (
    <div>
      <li>
        <img
          style={{ objectFit: 'cover' }}
          src={webformatURL}
          alt={type}
          width="375"
          height="400"
        />
      </li>
    </div>
  );
};
