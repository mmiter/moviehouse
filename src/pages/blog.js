import { m } from "framer-motion";
// next
import Head from "next/head";
// @mui
import { Box, Container, Grid } from "@mui/material";
// components
import { MainLayout } from "../components/MainLayout";
import { BlogPostCard } from "../components/sections/blog";
import { MotionViewport, varFade } from "../components/animate";
// utils
import { posts } from "../utils/DataPosts";

const Blog = () => (
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
        <Grid container spacing={3}>
          {posts.map((post, index) => (
            <Grid
              key={post.id}
              item
              xs={12}
              sm={6}
              md={(index === 0 && 6) || 3}
            >
              <m.div variants={varFade().inUp}>
                <BlogPostCard post={post} index={index} />
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

Blog.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Blog;
