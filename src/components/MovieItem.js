import PropTypes from "prop-types";
// next
import NextLink from "next/link";
// @mui
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
// utils
import { getImage } from "../utils/helpers";

export default function MovieItem({ movie }) {
  const { id, poster_path, title, vote_average, release_date } = movie;
  return (
    <Card
      sx={{
        float: "left",
        display: "block",
        width: "auto",
        textAlign: "center",
        borderRadius: "16px",
      }}
    >
      <NextLink href={`/movie/${id}`} passHref>
        <CardActionArea>
          {poster_path ? (
            <CardMedia
              component="img"
              image={getImage(poster_path)}
              alt={title}
              sx={{ width: 200, height: 300 }}
            />
          ) : (
            <CardMedia
              component="div"
              alt={title}
              sx={{
                width: "200px",
                height: "300px",
                backgroundColor: "#1b222b",
                backgroundImage: `url(${getImage(poster_path)})`,
                backgroundSize: "50%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
          )}
          <CardContent
            sx={{
              padding: "15px",
              height: "75px",
            }}
          >
            <Typography variant="subtitle2">{title}</Typography>
          </CardContent>
          <CardActions>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={4}>
                <Chip
                  variant="outlined"
                  size="small"
                  icon={<StarRateIcon color="warning" />}
                  label={vote_average}
                  style={{
                    color: "#f0f0f0",
                    border: "none",
                  }}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant="caption">{release_date}</Typography>
              </Grid>
            </Grid>
          </CardActions>
        </CardActionArea>
      </NextLink>
    </Card>
  );
}

MovieItem.propTypes = {
    movie: PropTypes.array
}