'use strict';

// const bookings = []
// const createBooking = function (flightNum, numPassengers=10, price) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123', undefined);
// createBooking('KOK')
// console.log(bookings)



const flight = 'LH234';
const sajib = {
  name: 'Sajib Mandal', 
  passport: 5783467456787
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 5783467456787) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, sajib);
console.log(flight); // LH234
console.log(sajib); // {name: 'Mr. Sajib Mandal', passport: 5783467456787}



