// next
import Head from "next/head";
// @mui
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
// utils
import { createEmotionCache } from "../utils/create-emotion-cache";
// theme
import { theme } from "../theme";
import "../theme/SliderNavigation.css";
import "react-modal-video/css/modal-video.min.css"
// components
import ProgressBar from "../components/ProgressBar";
import MotionLazyContainer from "../components/animate/MotionLazyContainer";

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>MovieHouse</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <MotionLazyContainer>
            <ProgressBar />
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </MotionLazyContainer>
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default App;
