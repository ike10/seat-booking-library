import React from 'react';
import './ReservationSummary.css';
import { ReservedSeat } from './Seat';

interface ReservationSummaryProps {
  reservedSeats: ReservedSeat[];
  borderColor?: string;
  bgColor?: string;
  headingColor?: string;
  itemColor?: string;
}

const ReservationSummary: React.FC<ReservationSummaryProps> = ({
  reservedSeats,
  borderColor = '#ccc',
  bgColor = '#f9f9f9',
  headingColor = '#333',
  itemColor = '#555',
}) => {
  const customStyles = {
    '--reservation-summary-border-color': borderColor,
    '--reservation-summary-bg-color': bgColor,
    '--reservation-summary-heading-color': headingColor,
    '--reservation-summary-item-color': itemColor,
  } as React.CSSProperties;

  return (
    <div className="reservation-summary" style={customStyles}>
      <h2>Reservation Summary</h2>
      <ul>
        {reservedSeats.map((seat) => (
          <li key={seat.seatNumber}>Seat {seat.seatNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationSummary;
