import React, { useState } from 'react';

function Search(props) {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('movie');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="search teal lighten-4">
      <div className="flex">
        <input
          className="search-field teal lighten-5"
          type="search"
          placeholder="Search ..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => searchMovies(search, type)}
          className="btn search-btn"
        >
          <i className="material-icons">search</i>
        </button>
      </div>
      <div className="search-type teal lighten-5">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>movie</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>series</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="episode"
            onChange={handleFilter}
            checked={type === 'episode'}
          />
          <span>episode</span>
        </label>
      </div>
    </div>
  );
}

export default Search;
