import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    type: 'movie',
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="search teal lighten-4">
        <div className="flex">
          <input
            className="search-field teal lighten-5"
            type="search"
            placeholder="Search ..."
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKeyDown}
          />
          <button
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
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
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>movie</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>series</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="episode"
              onChange={this.handleFilter}
              checked={this.state.type === 'episode'}
            />
            <span>episode</span>
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
