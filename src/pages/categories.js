import { m } from "framer-motion";
// next
import Head from "next/head";
// @mui
import { Box, Container } from "@mui/material";
// components
import { MainLayout } from "../components/MainLayout";
import CategoriesItem from "../components/CategoriesItem";
import { MotionViewport, varFade } from "../components/animate";

const Categories = () => (
  <>
    <Head>
      <title>Categories - MovieHouse</title>
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
          <CategoriesItem />
        </m.div>
      </Container>
    </Box>
  </>
);

Categories.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Categories;