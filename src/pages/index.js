import { m } from "framer-motion";
// next
import Head from "next/head";
// @mui
import { Box, Container, Grid } from "@mui/material";
// components
import { MainLayout } from "../components/MainLayout";
import {
  News,
  GenreList,
  ComingSoon,
  PopularMovie,
} from "../components/sections/home";
import { MotionViewport, varFade } from "../components/animate";

const Main = () => (
  <>
    <Head>
      <title>MovieHouse</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false} component={MotionViewport}>
        <Grid container spacing={3}>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <m.div variants={varFade().in}>
              <News />
              <GenreList />
            </m.div>
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <m.div variants={varFade().in}>
              <ComingSoon sx={{ height: "100%" }} />
            </m.div>
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <m.div variants={varFade().in}>
              <PopularMovie />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Main.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Main;
