import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import { Button, Box } from "@mui/material";
import { getCurrentUser, signOut } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const projects = [
    { id: 1, name: "AI Chatbot", status: "In Progress" },
    { id: 2, name: "Data Visualization", status: "Completed" },
    { id: 3, name: "Portfolio Website", status: "Pending" },
  ];
  const user = getCurrentUser();
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginBottom: "30px", textAlign: "center" }}>
        My Projects
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt:3 }}>
        <Box>
          {user ? (
            <>
              <Typography variant="body2" sx={{ mr:2, display:'inline' }}>Signed in as {user.username}</Typography>
              <Button size="small" onClick={() => { signOut(); navigate('/'); }}>Sign Out</Button>
            </>
          ) : (
            <Button size="small" onClick={() => navigate('/signin')}>Sign In</Button>
          )}
        </Box>
      </Box>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card sx={{ background: (theme) => theme.gradients.admin, color: '#fff' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2">{project.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
