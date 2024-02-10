import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import './App.css';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { getPhotos } from '../../apiService/photos';
import { SearchBar } from '../searchBar/SearchBar';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

Modal.setAppElement('#root');

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const onSubmit = query => {
    setPage(1);
    setPhotos([]);
    setTotalResults(0);
    setQuery(query);
    if (query === '') return toast.error('Write something to start searching');
  };

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    getPhotos(query, page)
      .then(resp => {
        setTotalResults(resp.data.total);
        setPhotos(oldPhotos => [...oldPhotos, ...resp.data.results]);
      })
      .catch(err => {
        console.log(err.message);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, [query, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} photos={photos} />
      <Toaster position="top-left" reverseOrder={false} />
      <ImageGallery photos={photos} />
      {photos.length < totalResults && (
        <LoadMoreBtn onClick={onClick}>Load more</LoadMoreBtn>
      )}
      {isLoading && <Loader />}
      {isError && (
        <ErrorMessage>
          Oops, something went wrong. Try again later...
        </ErrorMessage>
      )}
    </>
  );
};
