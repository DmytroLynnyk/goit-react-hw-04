import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim().toLowerCase();

    onSubmit(value);
    e.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
