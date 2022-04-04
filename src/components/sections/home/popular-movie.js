// @mui
import { Box, CardContent, CardHeader } from "@mui/material";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
// components
import MovieItem from "../../MovieItem";
import LoadingScreen from "../../LoadingScreen";
// utils
import DataApi from "../../../utils/DataApi";
import React from "react";

export default function PopularMovie() {
  const { data, loading } = DataApi("movie/popular");
  return (
    <Box sx={{ py: 2 }}>
      <CardHeader
        title="Popular Movies"
        sx={{
          p: "32px 24px 0 24px",
        }}
      />
      <CardContent>
        {loading ? (
          <LoadingScreen />
        ) : (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation
            modules={[Navigation]}
          >
            {data.results.map((movie) => (
              <SwiperSlide
                key={movie.id}
                style={{
                  textAlign: "center",
                  width: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: 200,
                }}
              >
                <MovieItem movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </CardContent>
    </Box>
  );
}
