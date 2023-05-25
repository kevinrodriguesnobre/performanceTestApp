const { parentPort } = require('worker_threads');

// Perform a CPU-intensive task (e.g., calculating Fibonacci series)
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Receive message from the parent thread
parentPort.on('message', n => {
  // Perform the CPU-intensive task
  const result = fibonacci(n);

  // Send the result back to the parent thread
  parentPort.postMessage(result);
});
