import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function MovieItem ({movie, title}) {

    const history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();


    const handlePosterClick = () => {
        // history.push(`/details/${movie.id}`);
        // console.log('the movie clicked', movie.id, movie.title);
            dispatch({
            type: 'SELECT_MOVIE',
            payload: movie
        })
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
                <img onClick={handlePosterClick} src={movie.poster} alt={movie.title}/>
                </Link>
            </div>
        </>
    )
}

export default MovieItem;