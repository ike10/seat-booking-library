import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SeatMap from '../src/components/SeatMap';

describe('SeatMap', () => {
  const sampleSeatData = [
    { seatNumber: 'A1', availability: 'available' },
    { seatNumber: 'A2', availability: 'selected' },
    { seatNumber: 'B1', availability: 'booked' },
  ];

  it('renders seats with correct availability', () => {
    const { container } = render(<SeatMap seatData={sampleSeatData} onSeatClick={() => {}} />);

    const seatElements = container.querySelectorAll('.seat');
    expect(seatElements.length).toBe(sampleSeatData.length);

    seatElements.forEach((seatElement, index) => {
      expect(seatElement).toHaveClass(sampleSeatData[index].availability);
    });
  });

  it('triggers onSeatClick when a seat is clicked', () => {
    const mockOnSeatClick = jest.fn();
    const { getByText } = render(<SeatMap seatData={sampleSeatData} onSeatClick={mockOnSeatClick} />);

    const seatToClick = getByText('A1');
    fireEvent.click(seatToClick);

    expect(mockOnSeatClick).toHaveBeenCalledWith('A1');
  });
});
