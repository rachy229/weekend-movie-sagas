import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";

function Details() {

    // const movies = useSelector(store => store.movies);
    const selectedMovie = useSelector(store => store.selectedMovie);

    const {id} = useParams();
    console.log('id is', {id});

    
    // console.log('movie in Details', movie)


    return(
        <div>

            <h3>{selectedMovie.title}</h3>
            <img src={selectedMovie.poster}></img>
            <p>{selectedMovie.description}</p>

        </div>
    )
}
export default Details;