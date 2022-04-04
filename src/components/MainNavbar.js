import PropTypes from "prop-types";
import styled from "@emotion/styled";
// @mui
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// components
import Search from "./MainSearch";

const MainNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[3],
}));

export const MainNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <MainNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none",
              },
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Search />
        </Toolbar>
      </MainNavbarRoot>
    </>
  );
};

MainNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
