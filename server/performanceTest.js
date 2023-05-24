// Function to test the performance
function performTask() {
	// Replace this with your actual code to test
	let test = 5;
	for (let i = 0; i < 400000000; i++) {
		test = 10 / 2 + 6;
		// Some task to measure performance
	}
}  

// Function to run the performance test
function runPerformanceTest() {
	// Start the timer
	console.time('Task');

	// Run the task
	performTask();

	// End the timer
	console.timeEnd('Task');
}

// Function to run the performance test on Windows
function runWindowsTest() {
	// Run the performance test
	runPerformanceTest();
}

// Function to run the performance test on macOS
function runMacOSTest() {
	// Run the performance test
	runPerformanceTest();
}

// Main function
function main() {
	// Detect the operating system
	const os = require('os');
	const platform = os.platform();

	// Run the performance test based on the operating system
	if (platform === 'win32') {
		runWindowsTest();
	} else if (platform === 'darwin') {
		runMacOSTest();
	} else {
		console.log('Unsupported operating system.');
	}
}

// Run the main function
main();
