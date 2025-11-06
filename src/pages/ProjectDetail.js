import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const LOCAL_KEY = 'demo_projects_v1';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return;
    const list = JSON.parse(raw);
    const found = list.find(p => String(p.id) === String(id));
    setProject(found || null);
  }, [id]);

  if (!project) {
    return (
      <Container>
        <Typography variant="h5" sx={{ mt: 4 }}>Project not found</Typography>
        <Button sx={{ mt: 2 }} onClick={() => navigate('/projects')}>Back to Projects</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h4">{project.name}</Typography>
          <Typography variant="body1" sx={{ mt:2 }}>{project.description}</Typography>
          <Typography variant="caption" display="block" sx={{ mt:2 }}>Status: {project.status}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProjectDetail;
