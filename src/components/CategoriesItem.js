import React from "react";
// next
import NextLink from "next/link";
// @mui
import { Button, Box } from "@mui/material";
// components
import LoadingScreen from "./LoadingScreen";
// utils
import DataApi from "../utils/DataApi";

export default function CategoriesItem() {
  const { data, loading } = DataApi("genre/movie/list");
  return loading ? (
    <LoadingScreen />
  ) : (
    <Box>
      {data.genres.map((item) => (
        <NextLink key={item.id} href={`/categories/${item.id}`} passHref>
          <Button
            variant="contained"
            sx={{
              width: 165,
              height: 100,
              backgroundColor: "#1a2129",
              margin: "5px",
            }}
          >
            {item.name}
          </Button>
        </NextLink>
      ))}
    </Box>
  );
}