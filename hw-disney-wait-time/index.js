const Queue = require("./Queue");

/**
 * Calculates the wait time of the park queue given the current queue, the number
 * of unit time it takes to process per corresponding customer and the number of
 * entrance counters.
 *
 * @param {number[]} customers - an array of positive integers representing the
 *   queue of customers. Each integer represents a customer, and its value is the
 *   amount of time they require to enter the park.
 * @param {number} numCounters - The number of entrance counters
 * @returns {number} The wait time of the queue in unit time
 *
 * Complexity: O(m * n) time | O(m + n) space
 * where m is the length of the customers array and n is the number of counters
 */

const waitTime = (customers, numCounters) => {
  const queue = new Queue();
  const counters = [];

  // Add all customers to the queue
  for (let customer of customers) {
    queue.enqueue(customer);
  }

  // Create customer counters
  for (let idx = 0; idx < numCounters; idx++) {
    counters.push(0);
  }

  // Dequeue queue through the counters until queue is empty
  while (!queue.isEmpty) {
    // Get minimum number from the counters and the index of the first counter that has
    // that minimum number
    let minCustomers = Number.POSITIVE_INFINITY;
    let nextCounterIdx = null;
    for (let idx = 0; idx < counters.length; idx++) {
      if (counters[idx] < minCustomers) {
        minCustomers = counters[idx];
        nextCounterIdx = idx;
      }
    }

    // Process customer to the counter with the least tickets
    const numTickets = queue.dequeue();
    counters[nextCounterIdx] += numTickets;
  }

  // Return the longest time from all counters
  return Math.max(...counters);
};
