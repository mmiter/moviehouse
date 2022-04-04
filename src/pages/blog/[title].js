import React from "react";
import { paramCase } from "change-case";
import PropTypes from "prop-types";
// next
import Head from "next/head";
// @mui
import { Container, Box, Card } from "@mui/material";
// components
import { MainLayout } from "../../components/MainLayout";
import BlogPostHero from "../../components/sections/blog/BlogPostHero";
import Markdown from "../../components/Markdown";
// utils
import { posts } from "../../utils/DataPosts";

const BlogPost = ({ post_title }) => {
  const post = posts.find((e) => paramCase(e.title) === post_title);
  return (
    <>
      <Head>
        <title>{post.title} - MovieHouse</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Card>
            <BlogPostHero post={post} />
            <Box sx={{ p: { xs: 3, md: 5 } }}>
              <Markdown children={post.body} />
            </Box>
          </Card>
        </Container>
      </Box>
    </>
  );
};

BlogPost.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getServerSideProps = async ({ params }) => {
  const post_title = params.title;
  return {
    props: { post_title },
  };
};

export default BlogPost;

BlogPost.propTypes = {
  post_title: PropTypes.string,
};
