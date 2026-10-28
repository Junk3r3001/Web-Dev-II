import './App.css';

import rogerImg from './assets/who-framed-roger-rabbit.jpg';
import hookImg from './assets/hook.jpg';
import lalaLandImg from './assets/la-la-land.jpg';
import hiddenFiguresImg from './assets/hidden-figures.jpg';
import palmSpringsImg from './assets/palm-springs.jpg';
import barbieImg from './assets/barbie.jpg';

const movies = [
  {
    id: 1,
    title: 'Who Framed Roger Rabbit (1988)',
    desc: 'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
    img: rogerImg,
  },
  {
    id: 2,
    title: 'Hook (1991)',
    desc: 'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
    img: hookImg,
  },
  {
    id: 3,
    title: 'La La Land (2016)',
    desc: 'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
    img: lalaLandImg,
  },
  {
    id: 4,
    title: 'Hidden Figures (2016)',
    desc: "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
    img: hiddenFiguresImg,
  },
  {
    id: 5,
    title: 'Palm Springs (2020)',
    desc: 'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
    img: palmSpringsImg,
  },
  {
    id: 6,
    title: 'Barbie (2023)',
    desc: 'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
    img: barbieImg,
  },
];

function MovieCard({ movie, className = '' }) {
  return (
    <article className={`movie-card ${className}`}>
      <div className="card-poster">
        <img src={movie.img} alt={movie.title} />
      </div>
      <div className="card-body">
        <div className="card-body-text">
          <h2 className="card-title">{movie.title}</h2>
          <p className="card-description">{movie.desc}</p>
        </div>
        <button type="button" className="watch-btn">WATCH NOW</button>
      </div>
    </article>
  );
}

function App() {
  const [featured, movie2, movie3, movie4, movie5, movie6] = movies;

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="header-container">
          <h1 className="brand-logo">watch.it</h1>
          <ul className="nav-links">
            <li><a href="#action">Action</a></li>
            <li><a href="#comedy">Comedy</a></li>
            <li><a href="#romance">Romance</a></li>
            <li><a href="#drama">Drama</a></li>
          </ul>
          <button type="button" className="search-btn">SEARCH</button>
        </div>
      </header>

      <main className="main-content">
        <MovieCard movie={featured} className="featured-card" />

        <div className="split-row">
          <MovieCard movie={movie2} />
          <MovieCard movie={movie3} />
        </div>

        <MovieCard movie={movie4} className="horizontal-card" />
        <MovieCard movie={movie5} className="horizontal-card" />
        <MovieCard movie={movie6} className="horizontal-card" />
      </main>
    </div>
  );
}

export default App;