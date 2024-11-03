"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { Movie } from "@/types/movie";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

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
    <ul className="grid grid-cols-6 gap-4 w-full">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
