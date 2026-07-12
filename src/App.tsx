import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <div>
      <h1>🎬 Hayao Miyazaki Movies</h1>

      <MovieCard title="Spirited Away" year={2001} />
      <MovieCard title="Howl's Moving Castle" year={2004} />
      <MovieCard title="Princess Mononoke" year={1997} />
      <MovieCard title="My Neighbor Totoro" year={1988} />
      <MovieCard title="Kiki's Delivery Service" year={1989} />

      <MovieInfo yonetmen="Hayao Miyazaki" tur="Animasyon" />
      
    </div>
  );
}

export default App;