/**
 * An Express 4.x application to serve as a Devnight interface
 *
 * @authors
 *   Shawn Martin-Truesdell <shawn@martin-truesdell.com>
 */
import express = require('express');
import { router } from './routes';
import { requestLogger, errorLogger } from '../utilities/logger';

/** Instantiate an Express HTTP Application */
export const app = express();

/** Enable body parsing middleware to simplify request handling */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/** Request logging */
app.use(requestLogger);

/** Add Router to handle requests */
app.use(router);

/** Error logging */
app.use(errorLogger);
