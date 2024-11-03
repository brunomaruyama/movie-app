import Image from "next/image";
import { Movie } from "@/types/movie";
import StarRating from "../StarRating";

export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  return (
    <li
      className="text-white w-full h-full rounded-lg overflow-hidden relative"
      key={movie.id}
    >
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          width={320}
          height={500}
          className="w-full h-[400px] object-cover"
        ></Image>
      </div>
      <div>
        <p>{movie.title}</p>
        <StarRating rating={movie.vote_average} />
        <p>{movie.overview}</p>
      </div>
    </li>
  );
}
