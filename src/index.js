import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ResponsiveAppBar from './components/NavBar.jsx';
import Renderer from './components/Renderer.jsx';
import ActionAreaCard from './components/Card.jsx';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const cards = [
  {
    title: 'Smart Curator',
    description: 'Instant access to breaking news headlines and historical news articles.',
    image: './img/showcase/news.jpg',
    link: 'https://rapidapi.com/symbola-symbola-default/api/smart-curator'
  }
];

// Correct way to start your app with React 18 and above
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <Renderer />
    <Paper sx={{
      backgroundColor: 'transparent !important', 
      boxShadow: 'none',
      color: '#fff',
      position: 'absolute',
      top: 75,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'fit-content'
      }}>
        <Grid container spacing={8} justifyContent="center" sx={{backgroundColor: 'transparent !important'}}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{backgroundColor: 'transparent !important'}}>
              <ActionAreaCard 
                title={card.title}
                description={card.description}
                image={card.image}
                link={card.link}
                key={index}
              />
            </Grid>
          ))}
        </Grid>
    </Paper>
  </React.StrictMode>
);

