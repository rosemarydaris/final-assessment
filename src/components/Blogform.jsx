import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper
} from '@mui/material';

const Blogform = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Name:", blogName);
    console.log("Description:", description);
    console.log("Author Name:", authorName);
    
    // Clear form after submission (optional)
    setBlogName('');
    setDescription('');
    setAuthorName('');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Add New Blog
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Blog Name"
            value={blogName}
            onChange={(e) => setBlogName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Author Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit Blog
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Blogform;
