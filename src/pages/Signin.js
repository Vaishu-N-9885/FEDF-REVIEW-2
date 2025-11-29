import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import { Button, Container, Typography, Box, TextField, Alert, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../utils/auth';

const Signin = () => {
  const navigate = useNavigate();
  const hasConfig = awsExports && Object.keys(awsExports).length > 0;
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (hasConfig) {
    return <Authenticator />;
  }

  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSignin = async () => {
    setError('');
    
    // Validation
    if (!usernameOrEmail.trim()) { setError('Username or email is required'); return; }
    if (!password) { setError('Password is required'); return; }
    
    // Demo validation: email format check if email is provided
    if (usernameOrEmail.includes('@') && !validateEmail(usernameOrEmail)) {
      setError('Invalid email format');
      return;
    }

    try {
      await authenticateUser({ usernameOrEmail, password });
      // Store session in localStorage
      localStorage.setItem('demo_user', JSON.stringify({ username: usernameOrEmail.trim(), loginTime: new Date().toISOString() }));
      navigate('/dashboard');
    } catch (e) {
      setError(e.message || 'Sign in failed');
    }
  };

  return (
    <Container maxWidth="xs" style={{ textAlign: 'center', paddingTop: 48 }}>
      <Box sx={{ mb: 2, textAlign: 'left' }}>
        <IconButton onClick={() => navigate(-1)} aria-label="back">
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Box sx={{ background: 'var(--form-bg)', p:4, borderRadius:2 }}>
        <Typography variant="h5" gutterBottom>Sign In (Demo)</Typography>
        {error && <Alert severity="error" sx={{ mb:2 }}>{error}</Alert>}
        <TextField fullWidth label="Username or Email" value={usernameOrEmail} onChange={(e)=>setUsernameOrEmail(e.target.value)} sx={{ mb:2 }} />
        <TextField fullWidth type="password" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} sx={{ mb:2 }} />
        <Button variant="contained" color="primary" onClick={handleSignin} sx={{ mt: 1 }}>Sign In</Button>
        <Typography variant="body2" sx={{ mt:2 }}>
          Don't have an account? <Button onClick={()=>navigate('/signup')} size="small">Create Account</Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signin;
