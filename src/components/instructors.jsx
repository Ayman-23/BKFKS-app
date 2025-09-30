import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const instructors = [
  { id: 1, name: 'Master Rahman', designation: 'Head Instructor', image: '/assets/images/instructor1.jpg' },
  { id: 2, name: 'Sensei Karim', designation: 'Senior Instructor', image: '/assets/images/instructor2.jpg' },
  { id: 3, name: 'Coach Nabila', designation: 'Assistant Instructor', image: '/assets/images/instructor3.jpg' },
];

const Instructors = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Our Instructors
      </Typography>
      <Grid container spacing={4}>
        {instructors.map((inst) => (
          <Grid item xs={12} sm={6} md={4} key={inst.id}>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
              <CardMedia
                component="img"
                height="200"
                image={inst.image}
                alt={inst.name}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6">{inst.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {inst.designation}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Instructors;
