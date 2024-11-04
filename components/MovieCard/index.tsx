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
      className="text-white w-full h-full rounded-lg overflow-hidden relative group"
      key={movie.id}
    >
      <div className="z-[9999]">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          width={320}
          height={500}
          className="w-full h-[400px] object-cover opacity-100 transition-opacity duration-500 group-hover:opacity-50"
        ></Image>
      </div>
      <div className="absolute z-0 bottom-0 p-2 bg-gradient-to-b from-transparent to-black h-1/3 flex flex-col justify-end">
        <p>{movie.title}</p>
        <StarRating rating={movie.vote_average} />
        <div className="opacity-0 mt-2 h-0 group-hover:opacity-100 group-hover:h-40 text-sm duration-500 ">
          <p className="line-clamp-5">{movie.overview}</p>
          <button className="w-full p-2 bg-indigo-600 mt-2 rounded-md hover:bg-indigo-800 duration-500">
            Ver mais
          </button>
        </div>
      </div>
    </li>
  );
}
