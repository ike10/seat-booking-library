// examples/BasicExample.tsx

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { SeatMap } from 'my-seat-booking-library'; // Adjust the import path as needed

import 'my-seat-booking-library/dist/bundle.css'; // Import the library's CSS

const initialSeatData = [
  { seatNumber: 'A1', availability: 'available' },
  { seatNumber: 'A2', availability: 'booked' },
  { seatNumber: 'B1', availability: 'available' },
  // ... more seat data
];

const BasicExample: React.FC = () => {
  const [seatData, setSeatData] = useState(initialSeatData);

  const handleSeatClick = (seatNumber: string) => {
    const updatedSeatData = seatData.map((seat) =>
      seat.seatNumber === seatNumber
        ? { ...seat, availability: seat.availability === 'available' ? 'selected' : 'available' }
        : seat
    );
    setSeatData(updatedSeatData);
  };

  return (
    <div>
      <h1>Basic Seat Booking Example</h1>
      <SeatMap seatData={seatData} onSeatClick={handleSeatClick} />
    </div>
  );
};

ReactDOM.render(<BasicExample />, document.getElementById('root'));
