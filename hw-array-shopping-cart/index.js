/**
 * Calculate the total bill of the items in PHP.
 * @param { Object[] } items - array of products
 * @returns { string } calculated bill in PHP
*/

const calculateBill = (items) => {
  // Conversion rate of USD to PHP
  const USDPHP = 50;

  // Get amounts of items in PHP
  const itemAmounts = items.map((item) => item.price * USDPHP);

  // Calculate final bill in PHP
  const finalBill = itemAmounts.reduce((acc, amount) => {
    return acc + amount;
  }, 50); // Add PHP 50.00 service fee

  // Return final bill in PHP
  return `PHP ${finalBill.toFixed(2)}`;
}
