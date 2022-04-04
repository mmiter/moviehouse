// next
import NextLink from "next/link";
// @mui
import { Box, Button } from "@mui/material";
// components
import LoadingScreen from "../../LoadingScreen";
// utils
import DataApi from "../../../utils/DataApi";
import React from "react";

export default function GenreList() {
  const { data, loading } = DataApi("genre/movie/list");
  return loading ? (
      <LoadingScreen />
  ) : (
    <Box sx={{ p: 4, textAlign: "center" }}>
      {data.genres?.map((genre) => (
        <NextLink key={genre.id} href={`/categories/${genre.id}`} passHref>
          <Button size="small" sx={{ m: "8px 8px 0 8px" }} variant="outlined">
            {genre.name}
          </Button>
        </NextLink>
      ))}
    </Box>
  );
}
