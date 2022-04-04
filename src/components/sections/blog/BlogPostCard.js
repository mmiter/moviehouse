import { format } from "date-fns";
import { paramCase } from "change-case";
import PropTypes from "prop-types";
// next
import NextLink from "next/link";
// @mui
import {
  Box,
  Card,
  Avatar,
  CardContent,
  Typography,
  Link,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
// components
import Image from "../../Image";

const OverlayStyle = styled("div")(({ theme }) => ({
  top: 0,
  zIndex: 1,
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: alpha(theme.palette.grey[900], 0.8),
}));

export default function BlogPostCard({ post, index }) {
  const { cover, title, author, createdAt } = post;
  const latestPost = index === 0 || index === 1 || index === 2;

  if (latestPost) {
    return (
      <Card>
        <Box sx={{ position: "relative" }}>
          <Avatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              zIndex: 9,
              top: 24,
              left: 24,
              width: 40,
              height: 40,
              position: "absolute",
            }}
          />
          <PostContent title={title} createdAt={createdAt} index={index} />
          <OverlayStyle />
          <Image alt="cover" src={cover} sx={{ height: 360 }} />
        </Box>
      </Card>
    );
  }

  return (
    <Card>
      <Box sx={{ position: "relative" }}>
        <Box
          component="span"
          sx={{
            display: "inline-block",
            bgcolor: "currentColor",
            mask: `url(https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg) no-repeat center / contain`,
            WebkitMask: `url(https://minimal-assets-api.vercel.app/assets/icons/shape-avatar.svg) no-repeat center / contain`,
            width: 80,
            height: 36,
            zIndex: 9,
            bottom: -15,
            position: "absolute",
            color: "background.paper",
          }}
        />
        <Avatar
          alt={author.name}
          src={author.avatarUrl}
          sx={{
            left: 24,
            zIndex: 9,
            width: 32,
            height: 32,
            bottom: -16,
            position: "absolute",
          }}
        />
        <Image alt="cover" src={cover} ratio="4/3" />
      </Box>
      <PostContent title={title} createdAt={createdAt} />
    </Card>
  );
}

export function PostContent({ title, createdAt, index }) {
  const latestPostLarge = index === 0;
  const latestPostSmall = index === 1 || index === 2;

  const linkTo = `/blog/${paramCase(title)}`;

  return (
    <CardContent
      sx={{
        pt: 4.5,
        width: 1,
        ...((latestPostLarge || latestPostSmall) && {
          pt: 0,
          zIndex: 9,
          bottom: 0,
          position: "absolute",
          color: "common.white",
        }),
      }}
    >
      <Typography
        gutterBottom
        variant="caption"
        component="div"
        sx={{
          opacity: 0.64,
          color: "neutral.100",
        }}
      >
        {format(createdAt, "dd MMM yyyy")}
      </Typography>
      <NextLink href={linkTo} passHref>
        <Link color="inherit" sx={{ textDecoration: "none" }}>
          <Typography variant="h5">{title}</Typography>
        </Link>
      </NextLink>
    </CardContent>
  );
}

BlogPostCard.propTypes = {
  post: PropTypes.array,
  index: PropTypes.number,
};
PostContent.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  index: PropTypes.number,
};
