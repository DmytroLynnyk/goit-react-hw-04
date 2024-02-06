import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from '../searchBar/SearchBar';
import './App.css';
import { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim().toLowerCase();
    console.log(value);
    if (value === '') return toast.error('Write something to start searching');
    setQuery(value);
    e.target.reset();
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Toaster position="top-left" reverseOrder={false} />{' '}
    </>
  );
};
