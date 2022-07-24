import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function MovieItem ({movie, title}) {

    const history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();


    const handlePosterClick = (movie) => {

        // console.log('the movie clicked', movie.id, movie.title);

        //select the specific movie that was clicked
        dispatch({
            type: 'SELECT_MOVIE',
            payload: movie
        }),

        //getting the genres for the movie that was clicked
            //targeting by movie id
        dispatch({
            type: 'FETCH_GENRES',
            payload: movie.id
        })

        // console.log('movie.id in handlePosterClick', movie.id)
        // console.log('movie in handlePosterClick', movie)
    }

    // function* handlePosterClick(movie, id) {
    //     dispatch({
    //         type: 'SELECT_MOVIE',
    //         payload: movie
    //     })
    // }

    // onClick={handlePosterClick}

    return(
        <>
            <div>
                <Link to={`/details/${movie.id}`}>
                <h3>{movie.title}</h3>
                <img onClick={() => handlePosterClick(movie)} src={movie.poster} alt={movie.title}/>
                </Link>
            </div>
        </>
    )
}



export default MovieItem;