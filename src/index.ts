/**
 * Initialize the Express webservice application and start the server
 *
 * @authors
 *   Shawn Martin-Truesdell <shawn@martin-truesdell.com>
 */
import dotenv = require('dotenv');
import fs = require('fs');
import https = require('https');
import path = require('path');
import { app } from './app';
import { logger } from './utilities/logger';

/** Initialize process environment variables from .env file */
dotenv.config();
const PORT = process.env.DEVNIGHT_PORT || 3030;

const CERT_PATH = process.env.DEVNIGHT_CERT_PATH || '../certificate';

/** Start the server */
const server = https
  .createServer(
    {
      key: fs.readFileSync(path.resolve(`${CERT_PATH}/server.key`)),
      cert: fs.readFileSync(path.resolve(`${CERT_PATH}/server.cert`)),
    },
    app
  )
  .listen(PORT, () => {
    logger.info(`Server started on https://localhost:${PORT}`);
  });

/** Handle system kill/term by shutting down the server to free the port */
process.on('uncaughtException', () => server && server.close());
process.on('SIGTERM', () => server && server.close());
