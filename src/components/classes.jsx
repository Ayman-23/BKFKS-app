import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const Classes = () => {
  const classes = useSelector(state => state.classes.classes);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Our Classes</Typography>
      <List>
        {classes.map(cls => (
          <ListItem key={cls.id}>
            <ListItemText primary={cls.name} secondary={cls.time} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Classes;
