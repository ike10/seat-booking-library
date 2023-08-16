import React from 'react';
import classNames from 'classnames';
import './Seat.css';

export type ReservedSeat = {
  seatNumber: string;
  availability: 'reserved';
};

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

export default Seat;

