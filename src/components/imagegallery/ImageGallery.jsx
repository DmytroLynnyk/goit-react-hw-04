import { ImageCard } from '../imagecard/ImageCard';

export const ImageGallery = photos => {
  return (
    <ul>
      {photos.map(photo => (
        <li key={photo.id}>
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
};
