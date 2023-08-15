import ReservationManager from '../src/utils/ReservationManager';
import { SeatData } from '../src/types/SeatData';

describe('ReservationManager', () => {
  const sampleSeats: SeatData[] = [
    { seatNumber: 'A1', availability: 'available' },
    { seatNumber: 'A2', availability: 'available' },
    { seatNumber: 'B1', availability: 'available' },
  ];

  it('should reserve available seats', () => {
    const reservationManager = new ReservationManager(sampleSeats);

    const isReserved = reservationManager.reserveSeat('A1');

    expect(isReserved).toBe(true);
  });

  it('should not reserve already booked seats', () => {
    const reservedSeats: SeatData[] = [
      { seatNumber: 'A1', availability: 'booked' },
    ];
    const reservationManager = new ReservationManager(reservedSeats);

    const isReserved = reservationManager.reserveSeat('A1');

    expect(isReserved).toBe(false);
  });

  it('should confirm reservations', () => {
    const reservationManager = new ReservationManager(sampleSeats);
    reservationManager.reserveSeat('A1');
    reservationManager.reserveSeat('B1');

    reservationManager.confirmReservation();

    const confirmedSeats = reservationManager.getSeats();

    expect(confirmedSeats).toEqual([
      { seatNumber: 'A1', availability: 'booked' },
      { seatNumber: 'A2', availability: 'available' },
      { seatNumber: 'B1', availability: 'booked' },
    ]);
  });
});
