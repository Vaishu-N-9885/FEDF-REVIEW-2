import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => (
  <Container>
    <Typography variant="h4" sx={{ textAlign: 'center', mt:4 }}>Contact</Typography>
    <Box sx={{ mt:3, display:'flex', flexDirection:'column', gap:2, maxWidth:600 }}>
      <TextField label="Your name" />
      <TextField label="Your email" />
      <TextField label="Message" multiline rows={4} />
      <Button variant="contained" color="primary">Send</Button>
    </Box>
  </Container>
);

export default Contact;
