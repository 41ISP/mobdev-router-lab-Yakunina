import MovieCard from '../components/MovieCard.jsx';
import GenreFilter from '../components/GenreFilter.jsx';
import { movies, genres } from '../data/movies.js';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('genre') || '';
 
  const visibleMovies = activeCategory
  ? movies.filter(m => m.genre === activeCategory)
  : movies;


  return (
    <section className="page-shell">
      <span className="eyebrow">Каталог</span>
      <h1 className="page-title">Все фильмы</h1>
      <p className="page-description">
        Выберите жанр. Выбранный фильтр должен храниться в адресной строке.
      </p>

      <GenreFilter genres={genres} />

      <div className="movie-grid">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
