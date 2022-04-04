import { useEffect } from "react";
import PropTypes from "prop-types";
// next
import NextLink from "next/link";
import { useRouter } from "next/router";
// @mui
import { Box, Divider, Drawer, useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import TodayIcon from "@mui/icons-material/Today";
// components
import { MainLogo } from "./MainLogo";
import { MainNavItem } from "./MainNav-item";

const items = [
  {
    href: "/",
    icon: <HomeIcon fontSize="small" />,
    title: "Home",
  },
  {
    href: "/movie",
    icon: <ExploreIcon fontSize="small" />,
    title: "Discover",
  },
  {
    href: "/categories",
    icon: <CategoryIcon fontSize="small" />,
    title: "Categories",
  },
  {
    href: "/upcoming",
    icon: <TodayIcon fontSize="small" />,
    title: "Coming soon",
  },
  {
    href: "/blog",
    icon: <ArticleIcon fontSize="small" />,
    title: "Blog",
  },
];

export const MainSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3, textAlign: "center" }}>
            <NextLink href="/" passHref>
              <a>
                <MainLogo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <MainNavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "background.default",
            color: "#FFFFFF",
            width: 280,
            borderRight: "1px dashed rgba(145, 158, 171, 0.24)",
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

MainSidebar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};
