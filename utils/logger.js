import winston from 'winston';

// Winston logger
const logger = winston.createLogger({
  level: 'info', // Set the minimum log level
  format: winston.format.json(), // Use JSON format for logs
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to a file
    new winston.transports.File({ filename: 'combined.log' }) // Log all messages to another file
  ],
});

export default logger;
