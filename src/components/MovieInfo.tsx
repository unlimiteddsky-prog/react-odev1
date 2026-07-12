interface MovieInfoProps {
  yonetmen: string;
  tur: string;
}

function MovieInfo({ yonetmen, tur }: MovieInfoProps) {
  return (
    <div>
      <p>Yönetmen: {yonetmen}</p>
      <p>Tür: {tur}</p>
    </div>
  );
}

export default MovieInfo;