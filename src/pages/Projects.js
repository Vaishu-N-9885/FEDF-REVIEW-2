import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, TextField, Box, Dialog, DialogTitle, DialogContent, DialogActions, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const LOCAL_KEY = 'demo_projects_v1';

function loadProjects() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) return JSON.parse(raw);

    // Seed demo projects when none exist
    const seed = [
      { id: 1, name: 'Weather App', description: 'Realtime weather dashboard using OpenWeather API', status: 'In Progress', weather: 'Sunny', temp: '25°C' },
      { id: 2, name: 'Group Portfolio', description: 'Collaborative portfolio site for team projects', status: 'Completed', weather: 'Cloudy', temp: '18°C' },
      { id: 3, name: 'Task Tracker', description: 'Kanban-style task tracker with drag/drop', status: 'Pending', weather: 'Rainy', temp: '15°C' },
    ];
    localStorage.setItem(LOCAL_KEY, JSON.stringify(seed));
    return seed;
  } catch (e) {
    console.error('Error loading projects:', e);
    return [];
  }
}

const Projects = () => {
  const [projects, setProjects] = useState(loadProjects());
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(projects));
    } catch (e) {
      console.error('Error saving projects:', e);
    }
  }, [projects]);

  const addProject = () => {
    setError('');
    if (!title.trim()) {
      setError('Project title is required');
      return;
    }
    if (!desc.trim()) {
      setError('Description is required');
      return;
    }

    try {
      if (editingId) {
        // Update existing project
        setProjects(projects.map(p => p.id === editingId ? { ...p, name: title.trim(), description: desc.trim() } : p));
        setEditingId(null);
      } else {
        // Create new project with simulated weather data
        const statuses = ['Pending', 'In Progress', 'Completed'];
        const weathers = ['Sunny', 'Cloudy', 'Rainy', 'Snowy'];
        const newProject = {
          id: Date.now(),
          name: title.trim(),
          description: desc.trim(),
          status: statuses[Math.floor(Math.random() * statuses.length)],
          weather: weathers[Math.floor(Math.random() * weathers.length)],
          temp: `${15 + Math.floor(Math.random() * 15)}°C`,
          createdAt: new Date().toISOString()
        };
        setProjects([newProject, ...projects]);
      }
      setTitle('');
      setDesc('');
      setOpenDialog(false);
    } catch (e) {
      setError('Failed to save project: ' + e.message);
    }
  };

  const deleteProject = (id) => {
    try {
      setProjects(projects.filter(p => p.id !== id));
    } catch (e) {
      setError('Failed to delete project: ' + e.message);
    }
  };

  const startEdit = (p) => {
    setTitle(p.name);
    setDesc(p.description);
    setEditingId(p.id);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setTitle('');
    setDesc('');
    setEditingId(null);
    setError('');
  };

  const getStatusColor = (status) => {
    if (status === 'Completed') return 'success';
    if (status === 'In Progress') return 'warning';
    return 'default';
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>Projects</Typography>

      {error && <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>{error}</Typography>}

      <Box sx={{ mb: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>+ New Project</Button>
      </Box>

      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>{editingId ? 'Edit Project' : 'Create New Project'}</DialogTitle>
        <DialogContent>
          {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
          <TextField fullWidth label="Project title" value={title} onChange={(e)=>setTitle(e.target.value)} sx={{ mt: 2, mb: 2 }} />
          <TextField fullWidth label="Short description" value={desc} onChange={(e)=>setDesc(e.target.value)} multiline rows={3} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={addProject}>{editingId ? 'Update' : 'Create'}</Button>
        </DialogActions>
      </Dialog>

      <Grid container spacing={3}>
        {projects.length === 0 && (
          <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>No projects yet — create one above.</Typography>
        )}
        {projects.map(p => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card sx={{ background: (theme)=>theme.gradients.admin, color: '#fff', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>{p.name}</Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>{p.description}</Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 1, flexWrap: 'wrap' }}>
                  <Chip label={p.status} color={getStatusColor(p.status)} size="small" />
                  {p.weather && <Chip label={`${p.weather} ${p.temp}`} variant="outlined" size="small" sx={{ color: '#fff', borderColor: '#fff' }} />}
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=>navigate(`/projects/${p.id}`)} sx={{ color: '#fff' }}>View</Button>
                <Button size="small" startIcon={<EditIcon />} onClick={() => startEdit(p)} sx={{ color: '#fff' }}>Edit</Button>
                <Button size="small" startIcon={<DeleteIcon />} onClick={() => deleteProject(p.id)} sx={{ color: '#fff' }}>Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
