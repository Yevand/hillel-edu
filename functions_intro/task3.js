function checkOrder(available, ordered) {
  switch (true) {
    case ordered === 0:
      console.log('Your order is empty');
      break;
    case available >= ordered:
      console.log('Your order is accepted');
      break;
    default:
      console.log('Your order is too large, we don’t have enough goods.');
  }
}

checkOrder(50, 0);
