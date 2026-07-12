interface MovieCardProps {
  title: string;
  year: number;
}

function MovieCard({ title, year }: MovieCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Yıl: {year}</p>
    </div>
  );
}

export default MovieCard;