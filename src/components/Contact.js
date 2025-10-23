import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MuiLink from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Link = styled(MuiLink)({
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  '& :hover': {
    textDecoration: 'underline',
  },
});

export default function Contact() {
  return (
    <Box py={10} id="contact" component="section">
      <Container>
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              component="h3"
              fontWeight="bold"
              gutterBottom
            >
              Contact
            </Typography>
            <Typography variant="h6">
              You can reach me via email, which is the easiest and most direct
              way to get in touch.
            </Typography>
            <Typography my={1} variant="subtitle1" color="secondary">
              If you have any questions or need additional information, feel
              free to email me directly.
            </Typography>
            <Typography variant="subtitle2" color="secondary">
              I appreciate your attention and look forward to doing business
              with you.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2}>
              <Link target="_blank" href="https://x.com/dadwic">
                <TwitterIcon color="action" />
                <Typography variant="h6" color="textSecondary" component="span">
                  Follow on X
                </Typography>
              </Link>
              <Link target="_blank" href="https://github.com/dadwic">
                <GitHubIcon color="action" />
                <Typography variant="h6" color="textSecondary" component="span">
                  Follow on GitHub
                </Typography>
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/dadwic/">
                <LinkedInIcon color="action" />
                <Typography variant="h6" color="textSecondary" component="span">
                  Connect on LinkedIn
                </Typography>
              </Link>
              <Divider />
              <Link target="_blank" href="mailto:mehralian@rialir.com">
                <EmailIcon color="action" />
                <Typography variant="h6" color="textSecondary" component="span">
                  mehralian@rialir.com
                </Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
