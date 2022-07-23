import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function Details() {

    const selectedMovie = useSelector(store => store.selectedMovie);

    const {id} = useParams();
    console.log('id is', {id});

    
    // console.log('movie in Details', movie)


    return(
        <div>
            <Link to={'/'}>Back to List</Link>

            <h3>{selectedMovie.title}</h3>
            <img src={selectedMovie.poster}></img>
            <p>{selectedMovie.description}</p>

        </div>
    )
}
export default Details;