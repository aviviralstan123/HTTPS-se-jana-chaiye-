require('dotenv').config();
const app = require('./src/app');
const { port } = require('./src/config/env');
const logger = require('./src/utils/logger');

app.listen(port, () => {
  logger.info(`Server is running on port ${port} in ${process.env.NODE_ENV} mode`);
});
