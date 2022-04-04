import React, { useState } from "react";
import { m } from "framer-motion";
// next
import Head from "next/head";
// @mui
import { Box, Container, Grid } from "@mui/material";
// components
import { MainLayout } from "../components/MainLayout";
import { Sorting, Filtering } from "../components/sections/movie";
import MovieList from "../components/MovieList";
import { MotionViewport, varFade } from "../components/animate";

const Movie = () => {
  const [sort, setSort] = useState("popularity.desc");
  const [genres, setGenres] = useState("");
  const [score, setScore] = useState([0, 10]);
  const getSort = (val) => setSort(val);
  const getGenres = (val) => setGenres(val);
  const getScore = (val) => setScore(val);

  return (
    <>
      <Head>
        <title>Discover - MovieHouse</title>
      </Head>
      <Box
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false} component={MotionViewport}>
          <Grid container>
            <Grid item md={2} xs={12}>
              <Box sx={{ py: 2 }}>
                <m.div variants={varFade().inLeft}>
                  <Sorting sortBy={getSort} />
                  <Filtering genresBy={getGenres} scoreBy={getScore} />
                </m.div>
              </Box>
            </Grid>
            <Grid item md={9} xs={12}>
              <m.div variants={varFade().inRight}>
                <MovieList
                  type="discover/movie"
                  sort={sort}
                  genres={genres}
                  score={score}
                />
              </m.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Movie.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Movie;
