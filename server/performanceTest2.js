const fs = require('fs');
const http = require('http');
const { Worker } = require('worker_threads');
const cluster = require('cluster');
const path = require('path');
import { Meteor } from 'meteor/meteor';

// Example asynchronous I/O operation
function performAsyncIO() {
	let filePath = path.resolve(process.env.PWD + __dirname, 'data.txt');
	// console.log(filePath);
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) throw err;
		console.log('File content:', data);
	});
} 

// Example CPU-intensive task using worker threads
function performCPUIntensiveTask() {
	// console.log(__dirname);
	let filePath = path.resolve(process.env.PWD + __dirname, 'compute.js');
	// console.log(filePath);
	const worker = new Worker(filePath);
	worker.on('message', result => {
		console.log('Result:', result);
	});
}

// Example server using cluster module
function startServer() {
	if (cluster.isMaster) {
		// Fork workers based on the number of CPU cores
		const numWorkers = require('os').cpus().length;
		for (let i = 0; i < numWorkers; i++) {
			cluster.fork();
		}

		// Handle worker exit
		cluster.on('exit', (worker, code, signal) => {
			console.log(`Worker ${worker.process.pid} died`);
			cluster.fork();
		});
	} else {
		// Create HTTP server
		http.createServer((req, res) => {
			res.writeHead(200);
			res.end('Hello, World!');
		}).listen(3000);

		console.log(`Worker ${process.pid} started`);
	}
}

// Example usage of the functions
function performMultiThreadedOperations() {
	// Perform asynchronous I/O operation
	performAsyncIO();

	// Perform CPU-intensive task using worker threads
	// performCPUIntensiveTask();

	// Start server using cluster module
	// startServer();
}

// Invoke the function
try {
	performMultiThreadedOperations();
} catch (error) {
	console.log(error);
}
