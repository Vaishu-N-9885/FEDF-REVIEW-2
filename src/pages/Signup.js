import React, { useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import { Button, Container, Typography, Box, TextField, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../utils/auth';

const Signup = () => {
  const navigate = useNavigate();
  const hasConfig = awsExports && Object.keys(awsExports).length > 0;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  if (hasConfig) {
    return <Authenticator initialState="signUp" />;
  }

  const handleSignup = async () => {
    setError('');
    if (!username.trim() || !email.trim() || !password) {
      setError('All fields are required');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }
    try {
      await createUser({ username: username.trim(), email: email.trim(), password });
      navigate('/dashboard');
    } catch (e) {
      setError(e.message || 'Registration failed');
    }
  };

  return (
    <Container maxWidth="xs" style={{ textAlign: 'center', paddingTop: 48 }}>
      <Box sx={{ background: 'var(--form-bg)', p:4, borderRadius:2 }}>
        <Typography variant="h5" gutterBottom>Create Account (Demo)</Typography>
        {error && <Alert severity="error" sx={{ mb:2 }}>{error}</Alert>}
        <TextField fullWidth label="Username" value={username} onChange={(e)=>setUsername(e.target.value)} sx={{ mb:2 }} />
        <TextField fullWidth label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} sx={{ mb:2 }} />
        <TextField fullWidth type="password" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} sx={{ mb:2 }} />
        <TextField fullWidth type="password" label="Confirm Password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} sx={{ mb:2 }} />
        <Button variant="contained" color="primary" onClick={handleSignup} sx={{ mt: 1 }}>Create Account</Button>
      </Box>
    </Container>
  );
};

export default Signup;
