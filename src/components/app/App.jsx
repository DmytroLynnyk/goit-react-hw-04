import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from '../SearchBar/SearchBar';
import './App.css';
import { useState, useEffect } from 'react';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { getPhotos } from '../../apiService/photos';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  const onSubmit = query => {
    setPage(1);
    setPhotos([]);
    setQuery(query);
    if (query === '') return toast.error('Write something to start searching');
  };

  useEffect(() => {
    if (!query) return;
    getPhotos(query, page)
      .then(resp => {
        setPhotos(oldPhotos => [...oldPhotos, ...resp.data.results]);
      })
      .catch(err => console.log(err));
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} photos={photos} />
      <Toaster position="top-left" reverseOrder={false} />
      <ImageGallery photos={photos} />
    </>
  );
};
