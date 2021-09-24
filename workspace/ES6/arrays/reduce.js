const avarageMovies = movies => movies.map(movies => movies.imdbRating).reduce((acc, curr)  => acc + curr, 0) / movieList.length;
console.log(avarageMovies(movieList));