import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                align="left"
                fontWeight="bold"
                gutterBottom
              >
                Contact
              </Typography>
              <Typography variant="h6">
                You can easily find me on LinkedIn, the best place where we can
                in touch with me.
                <br />
                For further communication, I prefer telephone conversations or
                video conferences.
              </Typography>
              <Typography my={1} variant="subtitle1" color="secondary">
                If you have any questions or need additional information, please
                let me know. Please send your message and your contact info via
                below contact form easily.
              </Typography>
              <Typography variant="subtitle2" color="secondary">
                I appreciate your attention and look forward to doing business
                with you.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardContent
                  sx={{
                    '&:last-child': {
                      padding: (theme) => ({
                        sm: theme.spacing(4, 2),
                        md: theme.spacing(6, 3),
                      }),
                    },
                  }}
                >
                  <form
                    noValidate
                    sx={{
                      width: '100%', // Fix IE 11 issue.
                      marginTop: (theme) => theme.spacing(3),
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography
                          variant="h4"
                          align="center"
                          fontWeight="bold"
                          sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}
                          gutterBottom
                        >
                          Write something 😀
                        </Typography>
                      </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          name="fullName"
                          label="Full Name"
                          variant="outlined"
                          autoComplete="cc-name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          name="email"
                          label="E-mail"
                          variant="outlined"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          multiline
                          fullWidth
                          required
                          rows={4}
                          label="Message"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                          Fields that are marked with * sign are required.
                        </Typography>
                        <Button
                          disabled
                          type="submit"
                          size="large"
                          color="primary"
                          variant="contained"
                          sx={{ margin: (theme) => theme.spacing(3, 0, 2) }}
                        >
                          Send
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
