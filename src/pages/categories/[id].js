import React, { useState } from "react";
import { m } from "framer-motion";
import PropTypes from "prop-types";
// next
import Head from "next/head";
// @mui
import { Box, Pagination, Container } from "@mui/material";
// components
import { MainLayout } from "../../components/MainLayout";
import MovieItem from "../../components/MovieItem";
import LoadingScreen from "../../components/LoadingScreen";
import { MotionViewport, varFade } from "../../components/animate";
// utils
import DataApi from "../../utils/DataApi";

const CategoriesID = ({ categories_id }) => {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const params = {
    region: "US",
    page: page,
    with_genres: categories_id,
  };

  const { data, totalPages, loading } = DataApi(
    `discover/movie`,
    params,
    true,
    page
  );

  const genres = DataApi("genre/movie/list").data.genres;
  const genre = genres?.find((x) => x.id === parseInt(categories_id));

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Head>
        <title>{genre.name} - MovieHouse</title>
      </Head>
      <Container maxWidth={false} component={MotionViewport}>
        <m.div variants={varFade().in}>
          <Box sx={{ py: 2 }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {data.results?.map((movie) => (
                <Box
                  key={movie.id}
                  sx={{
                    textAlign: "center",
                    width: "auto",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: 200,
                    margin: "30px 20px 0 0",
                  }}
                >
                  <MovieItem movie={movie} />
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "inline-block",
                mt: "15px",
                textAlign: "center",
              }}
            >
              <Pagination
                count={totalPages > 500 ? 500 : totalPages}
                page={page}
                onChange={handleChange}
              />
            </Box>
          </Box>
        </m.div>
      </Container>
    </>
  );
};

CategoriesID.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getServerSideProps = async ({ params }) => {
  const categories_id = params.id;
  return {
    props: { categories_id },
  };
};

export default CategoriesID;

CategoriesID.propTypes = {
  categories_id: PropTypes.number,
};
