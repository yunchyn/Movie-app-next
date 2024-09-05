"use client";
import { useState } from "react";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import searchStyles from "../../styles/search.module.css";
import { searchMovies, makeImagePath } from "../utilities";
import { FaSearch } from "react-icons/fa";
import { MovieSet } from "../../components/movie-set";

export default function SearchPage() {
  const [inputValue, setInputValue] = useState(""); // New state for input value
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return; // Use inputValue for checking empty query

    setQuery(inputValue); // Update query with inputValue
    const results = await searchMovies(inputValue);
    setMovies(results);
  };

  return (
    <>
      <form
        onSubmit={handleSearch}
        className={searchStyles.searchForm}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="영화 제목을 입력하세요."
          className={searchStyles.searchInput}
        />
        <button
          type="submit"
          className={searchStyles.searchButton}
        >
          <FaSearch />
        </button>
      </form>
      {movies.length > 0 && (
        <MovieSet
          title={`'${query}' 검색 결과`}
          movies={movies}
        />
      )}
    </>
  );
}
