// examples/AdvancedExample.tsx

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { SeatMap, ReservationManager, SeatData } from 'my-seat-booking-library'; // Adjust the import path as needed

import 'my-seat-booking-library/dist/bundle.css'; // Import the library's CSS

const initialSeatData: SeatData[] = [
  { seatNumber: 'A1', availability: 'available' },
  { seatNumber: 'A2', availability: 'available' },
  { seatNumber: 'B1', availability: 'available' },
  // ... more seat data
];

const AdvancedExample: React.FC = () => {
  const [seatData, setSeatData] = useState(initialSeatData);
  const reservationManager = new ReservationManager(seatData);

  const handleSeatClick = (seatNumber: string) => {
    reservationManager.reserveSeat(seatNumber);
    setSeatData([...reservationManager.getSeats()]);
  };

  const handleConfirmReservation = () => {
    reservationManager.confirmReservation();
    setSeatData([...reservationManager.getSeats()]);
  };

  return (
    <div>
      <h1>Advanced Seat Booking Example</h1>
      <SeatMap seatData={seatData} onSeatClick={handleSeatClick} />
      <button onClick={handleConfirmReservation}>Confirm Reservation</button>
    </div>
  );
};

ReactDOM.render(<AdvancedExample />, document.getElementById('root'));
