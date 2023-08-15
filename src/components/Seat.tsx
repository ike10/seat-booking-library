// src/components/Seat.tsx

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Seat.css';

interface SeatProps {
  seatNumber: string;
  availability: 'available' | 'selected' | 'booked';
  onClick: () => void;
}

const Seat: React.FC<SeatProps> = ({ seatNumber, availability, onClick }) => {
  const seatClass = classNames('seat', availability);

  return (
    <div className={seatClass} onClick={onClick}>
      {seatNumber}
    </div>
  );
};

Seat.propTypes = {
  seatNumber: PropTypes.string.isRequired,
  availability: PropTypes.oneOf(['available', 'selected', 'booked']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Seat;
