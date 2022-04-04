import { useState } from "react";
// @mui
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// components
import { MainNavbar } from "./MainNavbar";
import { MainSidebar } from "./MainSidebar";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const MainLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <MainLayoutRoot>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </MainLayoutRoot>
      <MainNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <MainSidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  );
};
