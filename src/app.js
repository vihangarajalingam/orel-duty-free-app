import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from '../routes/index.js';
import logger from '../utils/logger.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Using Morgan for HTTP request logging
app.use(morgan('combined'));

// Routes are defined in the routes module
app.use('/api/v1', routes);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});