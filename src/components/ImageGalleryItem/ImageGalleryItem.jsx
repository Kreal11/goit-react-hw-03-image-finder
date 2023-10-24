export const ImageGalleryItem = ({ ...image }) => {
  const { webformatURL, type } = image;
  return (
    <div>
      <li>
        <img src={webformatURL} alt={type} width="375" height="400" />
      </li>
    </div>
  );
};
