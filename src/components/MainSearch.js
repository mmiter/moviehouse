import { useState } from "react";
import axios from "axios";
// @mui
import { Box, TextField, Autocomplete } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const api_key = process.env.NEXT_PUBLIC_TMD_API_KEY;

const AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default function Search() {
  const [searchInput, setSearchInput] = useState("");

  const params = {
    api_key: api_key,
    region: "US",
    query: searchInput,
  };
  const [data, setData] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const getApi = AxiosInstance.get(`/search/movie`, { params });
      getApi.then((res) => {
        setData(res.data.results);
      });
    }
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <Autocomplete
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for a movie"
            variant="standard"
            onChange={(e) => searchItems(e.target.value)}
          />
        )}
        getOptionLabel={(option) => option.title}
        options={data}
        renderOption={(props, option) => (
          <Box
            key={option.id}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <a href={`/movie/${option.id}`}>{option.title}</a>
          </Box>
        )}
      />
    </Box>
  );
}
