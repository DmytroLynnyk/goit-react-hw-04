import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';

export const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.gallery}>
      {photos.map(photo => {
        // the point of destruct of the photo, need to be done during fetching
        const { small, regular, alt_description: alt } = photo.urls;
        return (
          <li key={photo.id}>
            <ImageCard small={small} alt={alt} regular={regular} />
          </li>
        );
      })}
    </ul>
  );
};
