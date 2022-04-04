// next
import NextLink from "next/link";
// @mui
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// components
import LoadingScreen from "../../LoadingScreen";
// utils
import DataApi from "../../../utils/DataApi";
import { getImage } from "../../../utils/helpers";
import React from "react";

export default function ComingSoon() {
  const { data, loading } = DataApi("movie/upcoming");
  return (
    <Card>
      <CardHeader title="Coming Soon" />
      <Divider />
      <List>
        {loading ? (
          <LoadingScreen />
        ) : (
          data.results.slice(0, 3).map((item, i) => (
            <ListItem key={item.id} divider={i < item.length - 1}>
              <NextLink href={`/movie/${item.id}`} passHref>
                <ListItemButton>
                  <ListItemAvatar>
                    <img
                      alt={item.title}
                      src={getImage(item.poster_path)}
                      style={{
                        width: 64,
                        borderRadius: 8,
                        marginRight: 10,
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={`Release date: ${item.release_date}`}
                  />
                </ListItemButton>
              </NextLink>
            </ListItem>
          ))
        )}
      </List>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <NextLink href="/upcoming" passHref>
          <Button
            component="a"
            color="primary"
            endIcon={<ArrowRightIcon />}
            size="small"
            variant="text"
          >
            View all
          </Button>
        </NextLink>
      </Box>
    </Card>
  );
}
