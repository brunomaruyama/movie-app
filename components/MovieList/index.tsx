"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { Movie } from "@/types/movie";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const url = process.env.NEXT_PUBLIC_TMDB_URL;
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    // Log the URL and API key to ensure they are defined
    console.log("TMDB_URL:", url);
    console.log("TMDB_API_KEY:", apiKey);

    if (!url || !apiKey) {
      setError("API URL or API key is not defined");
      setLoading(false);
      return;
    }
    axios({
      method: "GET",
      url: url,
      params: {
        api_key: apiKey,
        language: "pt-BR",
        sort_by: "popularity.desc",
      },
    })
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          "Failed to fetch movies";
        setError(errorMessage);
        setLoading(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
