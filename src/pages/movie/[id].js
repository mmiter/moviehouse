import React, { useState } from "react";
import { m } from "framer-motion";
import PropTypes from "prop-types";
// next
import Head from "next/head";
import dynamic from "next/dynamic";
// @mui
import {
  Box,
  Container,
  Chip,
  Typography,
  Divider,
  Avatar,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// components
import { MainLayout } from "../../components/MainLayout";
import LoadingScreen from "../../components/LoadingScreen";
import { MotionViewport, varFade } from "../../components/animate";
// utils
import DataApi from "../../utils/DataApi";
import { GetPoster, getImage } from "../../utils/helpers";

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
}));

const MovieID = ({ movie_id }) => {
  const asPath = `movie/${movie_id}`;

  const { loading } = DataApi(`${asPath}`);
  const movie = DataApi(`${asPath}`).data;
  const credits = DataApi(`${asPath}/credits`).data;
  const videos = DataApi(`${asPath}/videos`).data.results;

  function crews(ind) {
    let result = [];
    {
      credits.crew
        ?.filter((c) => c.job === ind)
        .map(
          (item, index) => (result[index] = (index ? ", " : "") + item.name)
        );
    }
    return result;
  }

  const trailer = videos
    ?.filter((c) => c.type === "Trailer")
    .slice(0, 1)
    .map((item) => item.key);
  const [isOpen, setOpen] = useState(false);

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Head>
        <title>{movie.title} - MovieHouse</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false} component={MotionViewport}>
          <m.div variants={varFade().in}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, sm: 3, md: 5 }}
            >
              <Item>
                <GetPoster title={movie.title} path={movie.poster_path} />
              </Item>
              <Item>
                <Typography variant="h3">{movie.title}</Typography>
                <Stack direction={{ xs: "column", md: "row" }} spacing={1}>
                  <Chip label={movie.release_date} />
                  <Chip label={`${movie.runtime} min`} />
                  <Chip
                    label={movie.genres?.map(
                      (genre, index) => (index ? ", " : "") + genre.name
                    )}
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={trailer}
                    onClose={() => setOpen(false)}
                  />
                  <Chip
                    label="Play trailer"
                    icon={<PlayArrowIcon />}
                    sx={{ color: "error.main" }}
                    onClick={() => setOpen(true)}
                  />
                </Stack>
                <Box sx={{ my: 2 }}>
                  <Chip
                    size="medium"
                    icon={<StarOutlineIcon color="warning" />}
                    label={movie.vote_average > 0 ? movie.vote_average : "NR"}
                    variant="rating"
                  />
                </Box>
                <Typography
                  variant="body1"
                  color="neutral.500"
                  sx={{ fontStyle: "italic", mb: 1 }}
                >
                  {movie.tagline}
                </Typography>
                <Typography variant="h6">Overview:</Typography>
                <Typography variant="body1">{movie.overview}</Typography>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={5}
                  sx={{ my: 2, textAlign: "center" }}
                >
                  <Box>
                    <Typography variant="subtitle1">
                      {crews("Director")}
                    </Typography>
                    <Typography variant="body2">Director</Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">
                      {movie.production_companies?.map(
                        (companies, index) =>
                          (index ? ", " : "") + companies.name
                      )}
                    </Typography>
                    <Typography variant="body2">Production</Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">
                      {movie.production_countries?.map(
                        (countries, index) =>
                          (index ? ", " : "") + countries.name
                      )}
                    </Typography>
                    <Typography variant="body2">Country of origin</Typography>
                  </Box>
                </Stack>
                <Divider textAlign="left" sx={{ my: 2 }}>
                  Top Cast
                </Divider>
                <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                  {credits.cast?.slice(0, 6).map((item) => (
                    <Box key={item.id} sx={{ textAlign: "center" }}>
                      <Avatar
                        alt={item.original_name}
                        src={getImage(item.profile_path)}
                        sx={{ m: "auto" }}
                      />
                      <Typography variant="subtitle1">{item.name}</Typography>
                      <Typography variant="body2">{item.character}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Item>
            </Stack>
          </m.div>
        </Container>
      </Box>
    </>
  );
};

MovieID.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getServerSideProps = async ({ params }) => {
  const movie_id = params.id;
  return {
    props: { movie_id },
  };
};

export default MovieID;

MovieID.propTypes = {
  movie_id: PropTypes.number,
};
