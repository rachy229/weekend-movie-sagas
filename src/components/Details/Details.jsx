import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function Details() {

    const history = useHistory();

    //the movie object that was clicked on
    const selectedMovie = useSelector(store => store.selectedMovie);
    console.log('selectedMovie in Details component', selectedMovie);

    //array of objects containing a .name property, along with all the other movie info
    //the .name is all that we're pulling from this at the moment
    const genres = useSelector(store => store.genres)
    console.log('genres in Details component', genres);


    // const {id} = useParams();
    // console.log('id is', {id});

    
    // console.log('movie in Details', movie)


    return(
        <div>

            <button onClick={() => {history.push('/')}}>Back to List</button>


            <h3>{selectedMovie.title}</h3>
            <img src={selectedMovie.poster}></img>
            <p>{selectedMovie.description}</p>

            {genres.map((genre, i) => {
                return (
                    <h3 key={i}>{genre.name}</h3>
                )
            })}

        </div>
    )
}
export default Details;