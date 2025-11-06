import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LOCAL_KEY = 'demo_projects_v1';

function loadProjects() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

const Projects = () => {
  const [projects, setProjects] = useState(loadProjects());
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(projects));
  }, [projects]);

  const addProject = () => {
    if (!title.trim()) return;
    const p = { id: Date.now(), name: title.trim(), description: desc.trim(), status: 'Pending' };
    setProjects([p, ...projects]);
    setTitle(''); setDesc('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>Projects</Typography>

      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <TextField label="Project title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <TextField label="Short description" value={desc} onChange={(e)=>setDesc(e.target.value)} />
        <Button variant="contained" color="primary" onClick={addProject}>Create</Button>
      </Box>

      <Grid container spacing={3}>
        {projects.length === 0 && (
          <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>No projects yet — create one above.</Typography>
        )}
        {projects.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card sx={{ background: (theme)=>theme.gradients.admin, color: '#fff' }}>
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography variant="body2">{p.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>navigate(`/projects/${p.id}`)} sx={{ color: '#fff' }}>View</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
