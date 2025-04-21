import React from 'react';
import TopSpot from './TopSpot';

const TopSpots = ({ spots }) => {
  return (
    <div data-testid="topspots" className="d-flex flex-wrap gap-3 justify-content-center">
      {spots.map(spot => (
        <TopSpot
          key={spot.id}
          name={spot.name}
          description={spot.description}
          location={spot.location}
        />
      ))}
    </div>
  );
};

export default TopSpots;