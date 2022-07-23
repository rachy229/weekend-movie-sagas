import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map((movie) => {
                    return (
                        < MovieItem key={movie.id} title={movie.title} poster={movie.poster} description={movie.description} movie={movie}/>
                        // <div key={movie.id} >
                        //     <h3>{movie.title}</h3>
                        //     <img onClick={handlePosterClick} src={movie.poster} alt={movie.title}/>
                        // </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;