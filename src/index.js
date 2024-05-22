import './style.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ResponsiveAppBar from './components/NavBar.jsx';
import Renderer from './components/Renderer.jsx';
import ActionAreaCard from './components/Card.jsx';
import Footer from './components/Footer.jsx';

const cards = [
  {
    title: 'Smart Curator',
    description: 'Instant access to breaking news headlines and historical news articles.',
    image: './img/showcase/news.jpg',
    link: 'https://rapidapi.com/symbola-prod/api/smart-curator/'
  }
];

// Correct way to start your app with React 18 and above
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <Renderer />
    <div className="card-container">
      {cards.map((card, index) => (
        <ActionAreaCard
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          link={card.link}
        />
      ))}
    </div>
    <Footer />
  </React.StrictMode>
);

