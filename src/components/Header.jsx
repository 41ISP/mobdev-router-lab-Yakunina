import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
//NavLink подсвечивает себя и не обновляет страницу при клике

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate()

  function handleSubmit(e) {
    
    if (e.key === 'Enter' && e.target.value.trim()) {
      navigate(`/search?q=` + encodeURIComponent(e.target.value.trim()))
      e.target.value = '';
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo"> 
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </Link>

        <nav className="nav">
          <NavLink className={({isActive}) => `nav-link${ isActive ? " active" : ""}`} to="/" label="Главная">Главная</NavLink>
          <NavLink className={({isActive}) => `nav-link${ isActive ? " active" : ""}`} to="/movies" label="Фильмы">Фильмы</NavLink>
          <NavLink className={({isActive}) => `nav-link${ isActive ? " active" : ""}`} to="/about" label="О нас">О проекте</NavLink>
          <NavLink className={({isActive}) => `nav-link${ isActive ? " active" : ""}`} to="/contacts" label="Контакты">Контакты</NavLink>
        </nav>

        <form className="search" onSubmit={(e) => e.preventDefault() }>
          <span className="search-icon">⌕</span>
          <input
            value={query}
            onKeyDown={handleSubmit}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}
