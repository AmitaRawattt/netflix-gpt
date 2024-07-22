import MovieCard from "./MovieCard"


const MovieList = ({title,movies}) => {
    // console.log(movies);
  return (
    <div className="px-6 my-6 ">
            <h1 className="text-3xl py-2 font-bold text-white ">{title}</h1>
        <div className="flex  scroll">
            <div className="flex">
            {movies?.map(movie=><MovieCard key={movie.id} path={movie?.poster_path} />)}
            
          
             
            </div>
        </div>
    </div>
  )
}

export default MovieList