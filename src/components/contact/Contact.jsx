import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';
//import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import './contact.scss';

const Contact = () => {
  const form = useRef();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (values) =>
  //   emailjs
  //     .sendForm('service_ijwrfcd', 'template_euwfa49', form.current, {
  //       publicKey: 'XQ9kFF5BwgvXh4hOB',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //         setSuccessOpen(true);
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //         setErrorOpen(true);
  //       }
  //     );

  const [errorOpen, setErrorOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  useEffect(() => (name.length > 0 && email.length > 0 && message.length > 0 ? setIsDisabled(false) : setIsDisabled(true)), [name, email, message]);

  const validateEmail = (e) => {
    const email = e.target.value;

    if (!validator.isEmail(email)) {
      setResponse('Please, enter a valid email');
      setEmailValid(false);
    } else {
      setResponse('');
      setEmailValid(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorOpen(false);
    setSuccessOpen(false);
  };

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'reply_to') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'message') {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ijwrfcd', 'template_euwfa49', form.current, {
        publicKey: 'XQ9kFF5BwgvXh4hOB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorOpen(true);
        }
      );
  };

  return (
    <div>
      <Typography variant="h2" component="h2">
        Contact Me
      </Typography>

      <Typography variant="body1" component="p" className="lead">
        Have a question or want to work together? Feel free to send me a message!
      </Typography>

      <Divider className="horizontal-divider" />

      <Box component="form" ref={form} noValidate onSubmit={handleSubmit} onChange={handleChange} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField autoComplete="given-name" name="name" required fullWidth id="name" label="Name" value={name} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="reply_to"
              autoComplete="email"
              value={email}
              onChange={(e) => validateEmail(e)}
              error={!emailValid}
              helperText={emailValid ? '' : response}
            />
          </Grid>
          <Grid item xs={12}>
            <Textarea required placeholder="Type your message…" id="message" name="message" minRows={5} maxRows={10} value={message} />
          </Grid>
        </Grid>

        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} disabled={isDisabled || !emailValid}>
          Send Message
        </Button>

        <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
            Your message has been successfully sent.
          </Alert>
        </Snackbar>

        <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
            Message failed to send. Please try again.
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};

export default Contact;
