// @mui
import { CardContent, Box } from "@mui/material";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// components
import { BlogPostCard } from "../blog";
// utils
import { posts } from "../../../utils/DataPosts";

export default function News() {
  return (
    <Box>
      <CardContent sx={{ py: 0 }}>
          <Swiper
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            pagination={true}
            modules={[Autoplay, Pagination, EffectCreative]}
            style={{
              borderRadius: "16px",
            }}
          >
            {posts?.map((post) => (
              <SwiperSlide
                key={post.id}
                style={{
                  width: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BlogPostCard post={post} index={1} />
              </SwiperSlide>
            ))}
          </Swiper>
      </CardContent>
    </Box>
  );
}
