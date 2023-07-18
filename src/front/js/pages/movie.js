import React, { useEffect, useContext, useState } from "react";
//import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/movie.css";
import { Reviews } from "../component/reviews";


export const Movie = () => {
  const params = useParams();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getMovie(params.movieId);
    actions.getTrailer(params.movieId);
    actions.getGenresById(params.movieId)
  }, []);
  const movie = store.movie;
  const trailer = store.trailer;
  const genres = store.genresById;
  //console.log(store.movie);
  const movieId = store.movie?.id
  //console.log(movieId)

  
  if (!movieId) return null
  return (
    <>
      <div className="container">
        <div className="movieDetailHeader ">
          <div className="titleRatingContainer">
            <div className="movieDetailTitle col-6">
              <h1>{movie.original_title}</h1>
              <p>Release date: {movie.release_date}</p>
            </div>
            <div className="movieDetailInfo col-6 col-lg-3">
              <div className="ratingContainer">
                <span className="ratingStar">&#9733;</span> 
                <span className="ratingText">Rating: {movie.vote_average}</span>
              </div>
            </div>
          </div>
          <div className="movieDetailMedia row">
            <div className="movieDetailPoster col-md-4 col-lg-2 d-none d-md-block" id="movieDetailTrailer">
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="d-block w-100" alt="..." />
            </div>
            <div className="movieDetailTrailer col-md-8 col-lg-7">
              <iframe className="movieTrailerIframe" key={movie.id}
                width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer}`}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              >

              </iframe>
            </div>

          </div>
        </div>
        <div className="movieDetailGenres">
          <div className="movieDetailGenre">
            {genres.map((genre, index) => {
              //console.log(genre)
              return (
                <button key={index} className="genreButton">
                {genre}
              </button>
              )
            })}

          </div>
          <div className="movieOverview">
            <p className="fade-in-text">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="movieDetailReviews">
        <Reviews movieId={movieId} key={movie.id} />
      </div>

    </>

  )

}  
