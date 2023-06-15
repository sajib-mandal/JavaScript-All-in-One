const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// forEach
movements.forEach(function(mov) {
  if (mov > 0) {
    console.log(`You deposited ${mov}`);
  } else {
    console.log(`You withdrew ${Math.abs(mov)}`);
  }
})
