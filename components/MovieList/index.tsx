"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

export interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
}

export default function MovieList() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "ef8664b577500d061cc3842fc78999e4",
        language: "pt-BR",
        sort_by: "popularity.desc",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <ul className="">
      {movies.map((movie) => (
        <li className="text-white" key={movie.id}>
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            width={480}
            height={640}
          ></Image>
        </li>
      ))}
    </ul>
  );
}
