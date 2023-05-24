const fs = require('fs');
const http = require('http');


function fibonacciTest() {
	function fibonacci(n) {
		if (n <= 1) {
			return n;
		}
		return fibonacci(n - 1) + fibonacci(n - 2);
	}

	const result = fibonacci(30);
}

function arrayTest() {
	const array = [5, 2, 8, 1, 4];
	array.sort((a, b) => a - b);
	// console.log(array);
}

function fileTest() {
	const data = 'Sample data to write to a file.';
	fs.writeFileSync('output.txt', data);

	const readData = fs.readFileSync('output.txt', 'utf8');
	//   console.log(readData);
}


function httpTest() {
	const options = {
		hostname: 'example.com',
		path: '/',
		method: 'GET'
	};

	const req = http.request(options, (res) => {
		res.on('data', (chunk) => {
			// Do something with the received data
		});
		res.on('end', () => {
			// console.log('Request completed.');
		});
	});

	req.end();
}



// Function to test the performance
function performTask() {
	console.log('start performTask');
	// Replace this with your actual code to test
	let test = 5;
	for (let i = 0; i < 400000000; i++) {
		test = 10 / 2 + 6;
		// Some task to measure performance
	}

	for(let i=0; i<100; i++) {
		httpTest();
	}

	for(let i=0; i<3000; i++) {
		fibonacciTest();
		arrayTest();
		fileTest();
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
