import "./App.css";
import MovieCard from "./components/MovieCard";
import MovieInfo from "./components/MovieInfo";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <h1>🎬 Hayao Miyazaki Movies</h1>

      <Card>
        <MovieCard title="Spirited Away" year={2001} puan={9} />
        <MovieInfo yonetmen="Hayao Miyazaki" tur="Animasyon" />
      </Card>

      <Card>
        <MovieCard title="Howl's Moving Castle" year={2004} />
        <MovieInfo yonetmen="Hayao Miyazaki" tur="Animasyon" />
      </Card>

      <Card>
        <MovieCard title="Princess Mononoke" year={1997} />
        <MovieInfo yonetmen="Hayao Miyazaki" />
      </Card>

      <Card>
        <MovieCard title="My Neighbor Totoro" year={1988} />
        <MovieInfo yonetmen="Hayao Miyazaki" tur="Animasyon" />
      </Card>

      <Card>
        <MovieCard title="Kiki's Delivery Service" year={1989} />
        <MovieInfo yonetmen="Hayao Miyazaki" tur="Animasyon" />
      </Card>
    </div>
  );
}

export default App;