import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        minHeight: 650,
        background: 'transparent',
        backgroundImage: 'linear-gradient(180deg, #fff 400px, primary.main 0%)',
        padding: (theme) => theme.spacing(6, 2),
      }}
    >
      <Container>
        <div className="aos-init aos-animate" data-aos="fade-up">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h4"
                component="h3"
                align="left"
                fontWeight="bold"
                gutterBottom
              >
                Contact
              </Typography>
              <Typography variant="h6" component="p">
                You can easily find me on LinkedIn, the best place where we can
                in touch with me.
                <br />
                For further communication, I prefer telephone conversations or
                video conferences.
              </Typography>
              <Typography
                my={1}
                variant="subtitle1"
                component="p"
                color="secondary"
              >
                If you have any questions or need additional information, please
                let me know. Please send your message and your contact info via
                below contact form easily.
              </Typography>
              <Typography variant="subtitle2" component="p" color="secondary">
                I appreciate your attention and look forward to doing business
                with you.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
