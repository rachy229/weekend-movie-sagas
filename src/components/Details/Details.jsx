import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './Details.css';

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
            
            {/* button that sends you back to the home page/list */}
            <button onClick={() => {history.push('/')}}>Back to List</button>

            {/* all of the details */}
            <h2>{selectedMovie.title}</h2>
            <div className="details">
                <img className="poster-details" src={selectedMovie.poster}></img>
                <h3 className="description-box">{selectedMovie.description}</h3>
            </div>

            {/* listing the genres */}
            <div className="genres-list">
                <h3>Genres:</h3>
                    {genres.map((genre, i) => {
                        return (
                            <p  key={i}>{genre.name}</p>
                        )
                    })}
            </div>
        </div>
    )
}
export default Details;