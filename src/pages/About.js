import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => (
  <Container>
    <Typography variant="h4" sx={{ textAlign:'center', mt:4 }}>About</Typography>
    <Typography variant="body1" sx={{ mt:2 }}>This Student Project Management platform helps students manage group projects, track progress and collaborate.</Typography>
  </Container>
);

export default About;
