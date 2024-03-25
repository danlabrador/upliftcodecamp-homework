/**
 * Calculate the total bill of the items in PHP.
 * @param { Object[] } items - array of products
 * @returns { string } calculated bill in PHP
*/

// REQUIREMENT: Receives an array of items and returns the total bill in PHP
const calculateBill = (items) => {
  const USDPHP = 50;

  // REQUIREMENT: Use map()
  const itemAmountsInPHP = items.map((item) => item.price * USDPHP);

  // REQUIREMENT: Use reduce()
  // Calculate final bill in PHP
  const finalBill = itemAmountsInPHP.reduce((acc, amount) => {
    return acc + amount;
  }, 50); // Add PHP 50.00 service fee

  return `PHP ${finalBill.toFixed(2)}`;
}
