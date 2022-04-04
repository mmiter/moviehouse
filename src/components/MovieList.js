import React, { useState } from "react";
import PropTypes from "prop-types";
// @mui
import { Box, Pagination } from "@mui/material";
// components
import MovieItem from "./MovieItem";
import LoadingScreen from "./LoadingScreen";
// utils
import DataApi from "../utils/DataApi";

export default function MovieList({ type = "discover/movie", ...other }) {
  const [page, setPage] = useState(1);

  const { sort, genres, score = [0, 10] } = { ...other };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const params = {
    region: "US",
    page: page,
    sort_by: sort,
    with_genres: genres,
    "vote_average.lte": score[1],
    "vote_average.gte": score[0],
  };

  const { data, totalPages, loading } = DataApi(type, params, true);

  return loading ? (
    <LoadingScreen />
  ) : (
    <Box sx={{ py: 2, textAlign: "center" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data.results.map((movie) => (
          <Box
            key={movie.id}
            sx={{
              textAlign: "center",
              width: "auto",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 200,
              margin: "0 20px 30px 0",
            }}
          >
            <MovieItem movie={movie} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "inline-block",
        }}
      >
        <Pagination
          count={totalPages > 500 ? 500 : totalPages}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
}

MovieList.propTypes = {
  type: PropTypes.string,
};
