// src/types/SeatData.ts

export interface SeatData {
  seatNumber: string;
  availability: SeatAvailability;
}

export type SeatAvailability = 'available' | 'selected' | 'booked';
