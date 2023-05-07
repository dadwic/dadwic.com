import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    // Init AOS
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Mehrdad Mehralian - Full-Stack Web Developer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="author" content="Oddwic" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Looking for a skilled Full-Stack web developer? Discover the expertise of Mehrdad Mehralian, specializing in front-end and back-end technologies. With a focus on delivering high-quality web solutions, Mehrdad Mehralian combines creativity and technical proficiency. Visit Mehrdad Mehralian's personal site to explore their portfolio and skills, or check out their Upwork profile for client testimonials and past projects."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
                '@context': 'https://schema.org/',
                '@type': 'Person',
                name: 'Mehrdad Mehralian',
                url: 'https://dadwic.com/',
                image: 'https://dadwic.com/images/avatar.jpeg',
                sameAs: [
                  'https://github.com/dadwic',
                  'https://dadwic.com/',
                ],
                jobTitle: 'Software Engineer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Oddwic',
                },
              }`,
          }}
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
