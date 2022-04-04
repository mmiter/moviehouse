import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const api_key = process.env.NEXT_PUBLIC_TMD_API_KEY;
const tmdbAxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

DataApi.propTypes = {
  getPath: PropTypes.string,
  params: PropTypes.objectOf(PropTypes.string),
  pagination: PropTypes.bool,
  page: PropTypes.number,
  sort: PropTypes.string,
};

export default function DataApi(
  getPath,
  params = { region: "US" },
  pagination = false
) {
  const getApi = tmdbAxiosInstance.get(`${getPath}?api_key=${api_key}`, {
    params,
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    getApi
      .then((res) => {
        setData(res.data);
        if (pagination) {
          setTotalPages(res.data.total_pages);
        }
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setHasError(true);
      });
  }, [JSON.stringify(params)]);
  return { loading, hasError, data, totalPages };
}