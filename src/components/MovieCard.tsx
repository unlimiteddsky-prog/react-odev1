interface MovieCardProps {
  title: string;
  year: number;
  puan?: number;
}

function MovieCard({
  title,
  year,
  puan = 10,
}: MovieCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Yıl: {year}</p>
      <p>Puan: {puan}</p>
    </div>
  );
}

export default MovieCard;