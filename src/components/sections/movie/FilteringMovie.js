import React, { useState } from "react";
// @mui
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// utils
import DataApi from "../../../utils/DataApi";

export default function SortingMovie(props) {
  const { data } = DataApi("genre/movie/list");

  const [genres, setGenres] = useState([]);
  const [score, setScore] = useState([0, 10]);

  const genresHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenres(typeof value === "string" ? value.split(",") : value);
    props.genresBy(value.join(","));
  };

  const scoreHandleChange = (event, value) => {
    setScore(value);
    props.scoreBy(value);
  };

  const marks = [
    { label: "0", value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    {
      label: "5",
      value: 5,
    },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { label: "10", value: 10 },
  ];

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filters-content"
        id="filters-header"
      >
        <Typography>Filters</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="multiple-checkbox-label">Genres</InputLabel>
            <Select
              labelId="multiple-checkbox-label"
              id="multiple-checkbox"
              multiple
              value={genres}
              onChange={genresHandleChange}
              input={<OutlinedInput label="Genres" />}
            >
              {data.genres?.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Score</Typography>
          <Slider
            getAriaLabel={() => "Score range"}
            value={score}
            min={0}
            marks={marks}
            max={10}
            onChange={scoreHandleChange}
            valueLabelDisplay="auto"
            disableSwap={true}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">Release Dates</Typography>
          <Typography variant="caption" sx={{ color: "neutral.400" }}>
            more options coming soon
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}