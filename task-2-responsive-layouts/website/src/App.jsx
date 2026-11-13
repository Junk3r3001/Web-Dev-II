
import './App.css';

import hook from './assets/hook.jpg';
import laLaLand from './assets/la-la-land.jpg';
import barbie from './assets/barbie.jpg';
import rogerRabbit from './assets/who-framed-roger-rabbit.jpg';
import hiddenFigures from './assets/hidden-figures.jpg';
import palmSprings from './assets/palm-springs.jpg';

const movies = [
  {
    title: 'Who Framed Roger Rabbit (1988)',
    image: rogerRabbit,
    description: 'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
  },
  {
    title: 'Hook (1991)',
    image: hook,
    description: 'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
  },
  {
    title: 'La La Land (2016)',
    image: laLaLand,
    description: 'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
  },
  {
    title: 'Hidden Figures (2016)',
    image: hiddenFigures,
    description: "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    title: 'Palm Springs (2020)',
    image: palmSprings,
    description: 'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
  },
  {
    title: 'Barbie (2023)',
    image: barbie,
    description: 'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>watch.it</h1>
        <nav>
          <a href="#">Action</a>
          <a href="#">Comedy</a>
          <a href="#">Romance</a>
          <a href="#">Drama</a>
        </nav>
        <button className="search-button">SEARCH</button>
      </header>

      <main className="movie-container">
        {movies.map((movie, index) => (
          <article className={`movie-card movie-${index + 1}`} key={movie.title}>
            <img src={movie.image} alt={movie.title} />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <button>WATCH NOW</button>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;
