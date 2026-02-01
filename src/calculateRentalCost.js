/**
 * @param {number} days
 *
 * @return {number}
 */

const amountPerDay = 40;
const discountFor3To6Days = 20;
const discountFor7OrMoreDays = 50;

function calculateRentalCost(days) {
  let totalCost = days * amountPerDay;

  if (days >= 7) {
    totalCost -= discountFor7OrMoreDays;
  } else if (days >= 3) {
    totalCost -= discountFor3To6Days;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
