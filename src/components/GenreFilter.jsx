import { useSearchParams } from "react-router-dom";


export default function GenreFilter({ genres }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('genre') || ''; 

  function handleSelect(genreId) {
    setSearchParams(genreId ? {genre: genreId} : {});
  }

  return (
    <div className="genres">
      {genres.map(gen => (
        <button
          key={gen.id || 'all'}
          type="button"
          className={'genre-btn' + (gen.id === activeCategory ? ' active' : '')}
          onClick={() => handleSelect(gen.id)}
        >
          {gen.label}
        </button>
      ))}
    </div>
  );
}
