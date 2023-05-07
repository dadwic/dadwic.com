import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header() {
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#intro'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: (theme) => `calc(100vh - ${theme.spacing(8)})`,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(/images/shapes/banner-bg.svg)',
      }}
    >
      <Box
        component="section"
        sx={{
          width: '100%',
          margin: '0 auto',
          maxWidth: '1140px',
          padding: (theme) => theme.spacing(0, 2, 6),
        }}
      >
        <div className="jarallax">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Avatar
                sx={{
                  margin: '0 auto',
                  backgroundColor: 'primary.main',
                  padding: (theme) => theme.spacing(4),
                }}
              >
                <SvgIcon viewBox="0 0 540 402" sx={{ fontSize: 40 }}>
                  <path
                    d="M358.22,201.09l180.91-58.77L427.31,296.2V105.99l111.81,153.88L358.22,201.09z M370.55,308.04
	C311.49,401.38,187.94,429.16,94.6,370.1S-26.52,187.48,32.54,94.15S215.16-26.98,308.49,32.09c25.03,15.84,46.22,37.03,62.06,62.06
	C311.49,28.42,210.32,23.02,144.6,82.09s-71.12,160.23-12.06,225.95s160.23,71.12,225.95,12.06
	C362.72,316.3,366.75,312.27,370.55,308.04z"
                  />
                </SvgIcon>
              </Avatar>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                component="h1"
                fontWeight={700}
                align="center"
                sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}
              >
                Mehrdad Mehralian
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Typography variant="h6" component="h2" color="textSecondary">
                Full-Stack Web Developer
              </Typography>
              <SvgIcon viewBox=" 0 0 320 512" sx={{ mx: 1 }}>
                <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
              </SvgIcon>
              <Typography variant="h6" color="textSecondary" fontWeight={300}>
                Istanbul, Türkiye
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Box>
      <IconButton
        sx={{
          width: '50px',
          height: '50px',
          border: (theme) => `2px solid ${theme.palette.primary.main}`,
          borderRadius: 'border-radius',
          backgroundColor: 'transparent !important',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        <KeyboardArrowDownIcon color="primary" />
      </IconButton>
    </Box>
  );
}
