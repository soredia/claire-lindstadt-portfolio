import { CacheProvider, EmotionCache } from "@emotion/react";
import { Container } from "@mui/material";
import Footer from "components/Footer";
import ThemeProvider from "context/themeContext";
import { siteSettings } from "data/siteSettings";
import createEmotionCache from "lib/createEmotionCache";
import { AppProps } from "next/app";
import Head from "next/head";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{siteSettings.title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={siteSettings.description} />
      </Head>
      <ThemeProvider>
        <Container maxWidth="md">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}
