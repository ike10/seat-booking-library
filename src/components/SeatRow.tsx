import React from 'react';
import Seat from './Seat';
import './SeatRow.css';

interface SeatData {
  seatNumber: string;
  availability: 'available' | 'selected' | 'booked';
}

interface SeatRowProps {
  seatData: SeatData[];
  onSeatClick: (seatNumber: string) => void;
}

const SeatRow: React.FC<SeatRowProps> = ({ seatData, onSeatClick }) => {
  return (
    <div className="seat-row">
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

export default SeatRow;


