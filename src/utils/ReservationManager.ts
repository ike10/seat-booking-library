// utils/ReservationManager.ts

import { SeatData, SeatAvailability } from '../types/SeatData';

class ReservationManager {
  private seats: SeatData[];

  constructor(seats: SeatData[]) {
    this.seats = seats;
  }

  getSeats(): SeatData[] {
    return this.seats;
  }

  updateSeatAvailability(seatNumber: string, newAvailability: SeatAvailability): void {
    const seatIndex = this.seats.findIndex((seat) => seat.seatNumber === seatNumber);

    if (seatIndex !== -1) {
      this.seats[seatIndex].availability = newAvailability;
    }
  }

  reserveSeat(seatNumber: string): boolean {
    const seat = this.seats.find((seat) => seat.seatNumber === seatNumber);

    if (seat && seat.availability === 'available') {
      this.updateSeatAvailability(seatNumber, 'selected');
      return true;
    }

    return false;
  }

  confirmReservation(): void {
    this.seats.forEach((seat) => {
      if (seat.availability === 'selected') {
        this.updateSeatAvailability(seat.seatNumber, 'booked');
      }
    });
  }
}

export default ReservationManager;
