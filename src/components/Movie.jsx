function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div className="card teal lighten-4">
      <div className="card-image waves-effect waves-light">
        <img
          className="poster activator"
          src={
            poster === 'N/A'
              ? `https://via.placeholder.com/300x400/000/fff?text=${title}`
              : poster
          }
          alt={title}
        />
      </div>
      <div className="card-content" title={title}>
        <div className="card-title activator grey-text text-darken-4">
          {title}
        </div>
        <div>
          {year} <span className="right">{type}</span>
        </div>
      </div>
      <div className="card-reveal teal lighten-5">
        <span className="card-title grey-text text-darken-4">
          <i className="material-icons right">close</i>
        </span>
        <div>{title}</div>
        <div className="card-reveal-content">
          <div>Year: {year}</div>
          <div>Type: {type}</div>
          <div>
            <a
              href={`https://www.imdb.com/title/${id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              More info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
