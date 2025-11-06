import React from "react";
import { Button, Container, Typography, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" style={{ textAlign: "center", paddingTop: 48 }}>
      <Box
        sx={{
          background: (theme) => theme.gradients.bg,
          padding: 6,
          borderRadius: 3,
          boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          color: '#fff'
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontFamily: "'Pacifico', cursive" }}>
          Student Project Management
        </Typography>
        <Typography variant="body1" gutterBottom>
          Manage your group projects efficiently and beautifully.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <Button variant="contained" color="primary" onClick={() => navigate('/signin')}>Sign In</Button>
          <Button variant="outlined" color="secondary" onClick={() => navigate('/signup')}>Create Account</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
