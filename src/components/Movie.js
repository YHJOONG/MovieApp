import React from "react";
import PropTypes  from "prop-types";
import "../css/Movie.css";

function Movie({id, title, year, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}></img>
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_date">{year}</h5>
            <ul className ="movie_genres">
                {genres.map((genre)=>{
                    return (
                        <li key="{genre}" className ="movie_genre">
                            {genre}
                        </li>
                    );
                })}
            </ul>
            <p className="movie_summary">{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;