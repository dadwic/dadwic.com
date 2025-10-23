import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
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
        minHeight: 'calc(100vh - 64px)',
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
          padding: 6,
          width: '100%',
          margin: '0 auto',
          maxWidth: '1140px',
        }}
      >
        <Stack alignItems="center" spacing={3}>
          <Avatar sx={{ p: 4, backgroundColor: 'primary.main' }}>
            <SvgIcon viewBox="0 0 540 402" sx={{ fontSize: 40 }}>
              <path
                d="M358.22,201.09l180.91-58.77L427.31,296.2V105.99l111.81,153.88L358.22,201.09z M370.55,308.04
	C311.49,401.38,187.94,429.16,94.6,370.1S-26.52,187.48,32.54,94.15S215.16-26.98,308.49,32.09c25.03,15.84,46.22,37.03,62.06,62.06
	C311.49,28.42,210.32,23.02,144.6,82.09s-71.12,160.23-12.06,225.95s160.23,71.12,225.95,12.06
	C362.72,316.3,366.75,312.27,370.55,308.04z"
              />
            </SvgIcon>
          </Avatar>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            fontWeight={500}
            sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}
          >
            Mehrdad Mehralian
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              component="h2"
              color="textSecondary"
              align="right"
              sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
            >
              Full-Stack Web Developer
            </Typography>
            <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
            <Typography
              variant="h6"
              component="h2"
              color="textSecondary"
              align="left"
              sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}
            >
              Top Rated Plus Freelancer
            </Typography>
          </Box>
        </Stack>
      </Box>
      <IconButton
        sx={{
          width: '50px',
          height: '50px',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'primary.main',
        }}
        onClick={handleClick}
        role="button"
      >
        <KeyboardArrowDownIcon color="primary" />
      </IconButton>
    </Box>
  );
}
