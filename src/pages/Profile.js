import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const Profile = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: 'center', mt: 4 }}>Profile</Typography>
      <Card sx={{ mt: 3, p:2 }}>
        <CardContent>
          <Typography variant="h6">User Name</Typography>
          <Typography variant="body2">student@example.edu</Typography>
          <Typography variant="body2" sx={{ mt:1 }}>Role: Student</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Profile;
