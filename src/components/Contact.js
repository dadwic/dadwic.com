import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Input from './Input';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().max(255).required(),
  })
  .required();

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (contact) => {
    setLoading(true);
    const { ok } = await fetch('api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact),
    });
    setLoading(false);
    setSuccess(ok);
  });

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
                  {success ? (
                    <Typography
                      component="p"
                      align="center"
                      variant="subtitle2"
                      sx={{ fontSize: '1.25em' }}
                    >
                      Thank you for your message&nbsp;❤️
                    </Typography>
                  ) : (
                    <form
                      noValidate
                      onSubmit={onSubmit}
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
                          <Input
                            name="name"
                            label="Name"
                            autoComplete="cc-name"
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Input
                            name="email"
                            label="E-mail"
                            autoComplete="email"
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Input
                            multiline
                            rows={4}
                            name="message"
                            label="Message"
                            control={control}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="subtitle2"
                            component="p"
                            gutterBottom
                          >
                            Fields that are marked with * sign are required.
                          </Typography>
                          <Button
                            type="submit"
                            size="large"
                            color="primary"
                            variant="contained"
                            disabled={loading}
                            sx={{ margin: (theme) => theme.spacing(3, 0, 2) }}
                          >
                            Send
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
