import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    
    // Validation
    if (!name.trim()) { setError('Name is required'); return; }
    if (!email.trim()) { setError('Email is required'); return; }
    if (!validateEmail(email)) { setError('Invalid email format'); return; }
    if (!message.trim() || message.trim().length < 10) { setError('Message must be at least 10 characters'); return; }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Store in localStorage for demo
      const contacts = JSON.parse(localStorage.getItem('demo_contacts') || '[]');
      contacts.push({ id: Date.now(), name: name.trim(), email, message: message.trim(), sentAt: new Date().toISOString() });
      localStorage.setItem('demo_contacts', JSON.stringify(contacts));
      
      setSuccess(`Message sent successfully, ${name.trim()}! We'll get back to you soon.`);
      setName('');
      setEmail('');
      setMessage('');
    } catch (e) {
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: 'center', mt:4, mb:3 }}>Contact Us</Typography>
      {error && <Alert severity="error" sx={{ mb:2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb:2 }}>{success}</Alert>}
      <Box sx={{ mt:3, display:'flex', flexDirection:'column', gap:2, maxWidth:600, mx:'auto' }}>
        <TextField label="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
        <TextField label="Your email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <TextField label="Message" multiline rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} />
        <Button variant="contained" color="primary" onClick={handleSubmit}>Send</Button>
      </Box>
    </Container>
  );
};

export default Contact;
