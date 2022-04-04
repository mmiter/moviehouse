import { m } from "framer-motion";
// next
import Head from "next/head";
// @mui
import { Box, Container } from "@mui/material";
// components
import { MainLayout } from "../components/MainLayout";
import MovieList from "../components/MovieList";
import { MotionViewport, varFade } from "../components/animate";

const upComing = () => (
  <>
    <Head>
      <title>Coming soon - MovieHouse</title>
    </Head>
    <Box
      sx={{
        flexGrow: 1,
        py: 8,
        textAlign: "center",
      }}
    >
      <Container maxWidth={false} component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <MovieList type="movie/upcoming" />
        </m.div>
      </Container>
    </Box>
  </>
);

upComing.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default upComing;
