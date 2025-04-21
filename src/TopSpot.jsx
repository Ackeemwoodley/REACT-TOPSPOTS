import React from 'react';
import Card from 'react-bootstrap/Card';

const TopSpot = ({ name, description, location }) => (
  <div data-testid="topspot" style={{ width: '18rem' }}>
    <Card>
      <Card.Body>
        <h4>{name}</h4>
        <Card.Text>{description}</Card.Text>
        <a
            href={`https://maps.google.com/?q=${location}`}
          className="btn btn-primary" 
          target="_blank"
          rel="noopener noreferrer"
          
        >
          View on Map
        </a>
      </Card.Body>
    </Card>
  </div>
);

export default TopSpot;