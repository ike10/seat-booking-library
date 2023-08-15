// src/components/SeatMap.tsx

import React from 'react';
import PropTypes from 'prop-types';
import Seat from './Seat';
import './SeatMap.css';

interface SeatData {
  seatNumber: string;
  availability: 'available' | 'selected' | 'booked';
}

interface SeatMapProps {
  seatData: SeatData[];
  onSeatClick: (seatNumber: string) => void;
}

const SeatMap: React.FC<SeatMapProps> = ({ seatData, onSeatClick }) => {
  return (
    <div className="seat-map">
      {seatData.map((seat) => (
        <Seat
          key={seat.seatNumber}
          seatNumber={seat.seatNumber}
          availability={seat.availability}
          onClick={() => onSeatClick(seat.seatNumber)}
        />
      ))}
    </div>
  );
};

SeatMap.propTypes = {
  seatData: PropTypes.arrayOf(
    PropTypes.shape({
      seatNumber: PropTypes.string.isRequired,
      availability: PropTypes.oneOf(['available', 'selected', 'booked']).isRequired,
    })
  ).isRequired,
  onSeatClick: PropTypes.func.isRequired,
};

export default SeatMap;
