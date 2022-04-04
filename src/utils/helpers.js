import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const nullImage = `/static/images/none.svg`;

export function getImage(path) {
  return path
    ? `https://image.tmdb.org/t/p/w300/${path}`
    : `/static/images/none.svg`;
}

export function GetPoster({ title, path }) {
  return path ? (
    <img
      alt={title}
      src={`https://image.tmdb.org/t/p/w300/${path}`}
      style={{
        borderRadius: 8,
        marginRight: 10,
      }}
    />
  ) : (
    <Box
      sx={{
        borderRadius: 2,
        marginRight: 10,
        width: "300px",
        height: "450px",
        backgroundColor: "#1b222b",
        backgroundImage: `url(${nullImage})`,
        backgroundSize: "50%",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

GetPoster.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};
