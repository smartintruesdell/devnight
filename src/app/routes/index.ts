/**
 * Router for the simple webservice we're building
 *
 * @authors
 *   Shawn Martin-Truesdell <shawn@martin-truesdell.com>
 */
import { Router } from 'express';
import BinRota from './bin-rota.route';

export const router = Router();
router.get('/err', (req, res, next) => {
  return next(new Error('This is an Error and it should be logged.'));
});

router.get('/ok', (_req, res) => {
  res.write('Success!');
  res.end();
});

router.use(BinRota);
