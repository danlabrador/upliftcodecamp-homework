/**
 * Represents a vending machine.
 */

class VendingMachine {
  constructor(snacks) {
    /** @type {Array} */
    this.snacks = snacks;
  }

  /**
   * @public
   * @param {number} snackIndex - The index of the snack in the vending machine
   * @param {number} money - The amount of money the user inserted
   * @returns {Object|String} - The object of the snack and the change or an error message
  */

  vend(snackIndex, money) {
    const snack = this.snacks[snackIndex];

    // Check if the snack exists
    if (!snack) {
      return 'Snack not found';
    }

    // Check if the money is enough
    if (money < snack.price) {
      return 'Your money is not enough, sorry';
    }

    // Return the object snack and the change
    return {
      name: snack.name,
      change: money - snack.price
    };
  }
}

const snacks = [
  { name: 'Cheese Ring', price: 15 },
  { name: 'Nova', price: 12 },
  { name: 'Moby', price: 5 },
];

const vendingMachine = new VendingMachine(snacks);
