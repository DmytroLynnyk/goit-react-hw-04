import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';

export const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(photo => {
        return (
          <li key={photo.id}>
            <ImageCard photo={photo} />
          </li>
        );
      })}
    </ul>
  );
};
