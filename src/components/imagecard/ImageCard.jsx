import css from './ImageCard.module.css';
import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';

export const ImageCard = ({ photo: { small, alt, regular } }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className={css.card}>
      <img
        className={css.cardImage}
        src={small}
        alt={alt}
        onClick={openModal}
      />

      <ImageModal
        alt={alt}
        regular={regular}
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};
