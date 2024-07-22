import { IMG_URL } from "../utils/constants"


const MovieCard = ({path}) => {

  return (
    <div className="w-48 pr-4">
        <img src={IMG_URL + path } alt="movie-img"/>
    </div>
  )
}

export default MovieCard