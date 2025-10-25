import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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
  '& img': {
    width: '100%',
    height: '100%',
    display: 'block',
    maxWidth: '80px',
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
        <Grid container spacing={2}>
          <Grid size={12}>
            <Grid container spacing={8}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={1}>
                  <Grid size={12}>
                    <Typography
                      variant="overline"
                      fontWeight={600}
                      color="primary"
                    >
                      100+ Projects
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="h4" component="h2" color="textPrimary">
                      Web Development
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography
                      component="h3"
                      variant="subtitle1"
                      color="textSecondary"
                      align="justify"
                    >
                      My approach focuses on creating seamless user experiences
                      by combining the power of front-end technologies like
                      React and responsive design principles. With a strong
                      emphasis on back-end development using Node.js and
                      MongoDB, you ensure efficient data management and API
                      integrations. Leveraging modern tools and collaborative
                      workflows, you deliver high-quality web applications
                      through rigorous testing and version control practices.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <span
                  style={{
                    color: 'transparent',
                    display: 'inline-block',
                    height: 'auto',
                    width: 'auto',
                  }}
                >
                  <img
                    width="auto"
                    height="auto"
                    alt="Integrations"
                    src="/images/illustrations/progressive-app.svg"
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'block',
                    }}
                  />
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={8}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 4 }}>
                    <Card>
                      <CardContent>
                        <img alt="Node.js" src="/images/logos/nodejs.svg" />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 4 }}>
                    <Card>
                      <CardContent>
                        <img
                          alt="MongoDB"
                          src="/images/logos/mongodb.svg"
                          style={{ maxWidth: 120 }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 4 }}>
                    <Card>
                      <CardContent>
                        <img alt="AWS" src="/images/logos/aws.svg" />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 4 }}>
                    <Card>
                      <CardContent>
                        <img alt="React" src="/images/logos/react.svg" />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 4 }}>
                    <Card>
                      <CardContent>
                        <img
                          alt="Next.js"
                          src="/images/logos/nextjs.svg"
                          style={{ maxWidth: 100 }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid size={{ xs: 4 }}>
                    <Card>
                      <CardContent>
                        <img alt="Material-UI" src="/images/logos/mui.svg" />
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={1}>
                  <Grid size={12}>
                    <Typography
                      variant="overline"
                      color="primary"
                      fontWeight={600}
                    >
                      20+ Technologies
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="h4" component="h3" color="textPrimary">
                      Technology Stack
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography
                      variant="subtitle1"
                      component="h3"
                      color="textSecondary"
                      align="justify"
                    >
                      My tech stack focuses on React, Next.js, TypeScript,
                      Node.js, MongoDB, MUI, and AWS. React and MUI allow me to
                      build dynamic, responsive, and user-friendly interfaces.
                      Node.js and MongoDB power scalable back-end APIs and
                      efficient data handling. Next.js ensures high performance
                      and SEO-friendly web applications, while AWS provides
                      secure and reliable deployment. This stack lets me deliver
                      full-stack web solutions that are fast, maintainable, and
                      optimized.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
