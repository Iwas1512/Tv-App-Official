import React from 'react';
import './Hero.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link , useNavigate} from 'react-router-dom';
import  Button  from 'react-bootstrap/Button';




const Hero = ({ movies = [] }) => {

  const navigate = useNavigate();

  function reviews(movieId)
  {
    navigate(`/Reviews/${movieId}`);
  }
  return (
    <div className='movie-carousel-container'>
      {movies && movies.length > 0 ? (
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          autoPlay={false}
          emulateTouch={true}
        >
          {movies?.map((movie, index) => (
            <div key={`movie-${movie.imdbId || index}`} className='movie-card-container'>
              <div
                className='movie-card'
                style={{
                  "--img": `url(${movie.backdrops && movie.backdrops.length > 0 ? movie.backdrops[0] : ''})`
                }}
              >
                <div className='movie-detail'>
                  <div className='movie-poster'>
                    <img src={movie.poster} alt={movie.title || "Movie poster"}/>
                  </div>
                  <div className='movie-title'>
                    <h2>{movie.title}</h2>
                  </div>
                  <div className='movie-buttons-container'>
                    <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length-11)}`}>
                      <div className='play-button-icon-container'>
                        <FontAwesomeIcon 
                          className='play-button-icon'
                          icon={faCirclePlay}
                        />
                      </div>
                    </Link>
                    <div className='move-review-button-container'>
                      <Button variant='info' onClick ={() =>reviews(movie.imdbId)  }>Reviews</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div>Loading movies...</div>
      )}
    </div>
  );
};

export default Hero;