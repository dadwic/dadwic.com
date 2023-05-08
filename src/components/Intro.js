/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import classes from './styles.module.css';

const Card = styled(MuiCard)({
  width: '100%',
  height: '100%',
  boxShadow: '0 2px 10px 0 rgba(23, 70, 161, .11)',
  transition:
    'box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease',
  '&:hover': {
    transform: 'translate3d(0, -5px, 0)',
    boxShadow:
      '0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05) !important',
  },
});

const CardContent = styled(MuiCardContent)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '&:last-child': {
    padding: '32px 16px',
    [theme.breakpoints.up('md')]: {
      padding: '48px 24px',
    },
  },
}));

export default function Intro() {
  return (
    <Box
      id="intro"
      component="section"
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: (theme) => theme.spacing(6, 2),
        background: 'transparent',
        backgroundImage:
          'linear-gradient(180deg, rgb(247, 249, 250) 100%, #fff 0%)',
      }}
    >
      <Container>
        <div className="jarallax">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        variant="overline"
                        fontWeight={600}
                        color="primary"
                      >
                        100+ Projects
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        component="h2"
                        color="textPrimary"
                      >
                        Web Development
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        component="h3"
                        variant="subtitle1"
                        color="textSecondary"
                        align="left"
                      >
                        My approach focuses on creating seamless user
                        experiences by combining the power of front-end
                        technologies like React and responsive design
                        principles. With a strong emphasis on back-end
                        development using Node.js and MongoDB, you ensure
                        efficient data management and API integrations.
                        Leveraging modern tools and collaborative workflows, you
                        deliver high-quality web applications through rigorous
                        testing and version control practices.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  className="aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <span
                    style={{
                      color: 'transparent',
                      display: 'inline-block',
                      height: 'auto',
                      width: 'auto',
                    }}
                    className={clsx(
                      'lazy-load-image-background opacity lazy-load-image-loaded'
                    )}
                  >
                    <img
                      width="auto"
                      height="auto"
                      alt="Integrations"
                      src="/images/illustrations/progressive-app.svg"
                      className={classes.illustration}
                    />
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid
                  item
                  md={6}
                  xs={12}
                  className="aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="PHP"
                            src="/images/logos/php.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="Laravel"
                            src="/images/logos/laravel.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="Node.js"
                            src="/images/logos/nodejs.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="React"
                            src="/images/logos/react.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="Next.js"
                            src="/images/logos/nextjs.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={4}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <img
                            alt="Material-UI"
                            src="/images/logos/mui.svg"
                            className={clsx(classes.image, classes.cardImg)}
                          />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        variant="overline"
                        color="primary"
                        fontWeight={600}
                      >
                        20+ Technologies
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h4"
                        component="h3"
                        color="textPrimary"
                      >
                        Technology Stack
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="subtitle1"
                        component="h3"
                        color="textSecondary"
                        align="left"
                      >
                        My tech stack includes PHP and WordPress for rapid and
                        scalable content management system (CMS) development,
                        while Node.js and MongoDB provide the flexibility and
                        power for building robust back-end APIs and managing
                        data storage. With GraphQL, React, and TypeScript, I can
                        create dynamic and efficient front-end interfaces,
                        leveraging the benefits of type safety and seamless data
                        fetching. Utilizing Next.js, MUI, and AWS, my stack
                        ensures smooth performance, responsive designs, and
                        reliable deployment, empowering me to deliver
                        high-quality web applications.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
