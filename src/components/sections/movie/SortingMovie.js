import React, { useState } from "react";
// @mui
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SortingMovie(props) {
  const [expanded, setExpanded] = useState("sortPanel");
  const handleChangeSortPanel = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [sort, setSort] = useState("popularity.desc");
  const handleChangeSort = (event) => {
    setSort(event.target.value);
    props.sortBy(event.target.value);
  };

  return (
    <Accordion
      expanded={expanded === "sortPanel"}
      onChange={handleChangeSortPanel("sortPanel")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="sortPanel-content"
        id="sortPanel-header"
      >
        <Typography>Sort</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">Sort Results By</Typography>
        <Box sx={{ py: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="select-label">Sort</InputLabel>
            <Select
              labelId="select-label"
              id="simple-select"
              value={sort}
              label="Age"
              onChange={handleChangeSort}
            >
              <MenuItem value={"popularity.desc"}>Popularity Descending</MenuItem>
              <MenuItem value={"popularity.asc"}>Popularity Ascending</MenuItem>
              <MenuItem value={"vote_average.desc"}>Rating Descending</MenuItem>
              <MenuItem value={"vote_average.asc"}>Rating Ascending</MenuItem>
              <MenuItem value={"primary_release_date.desc"}>Release Date Descending</MenuItem>
              <MenuItem value={"primary_release_date.asc"}>Release Date Ascending</MenuItem>
              <MenuItem value={"title.asc"}>Title (A-Z)</MenuItem>
              <MenuItem value={"title.desc"}>Title (Z-A)</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}