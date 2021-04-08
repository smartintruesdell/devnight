import { Router, Request, Response, NextFunction } from 'express';
import { logger } from '../../utilities/logger';
import { Result, Ok, Err } from '../../utilities/result';
import { binRota2 } from '../../problems/bin-rota';

// Configuration //////////////////////////////////////////////////////////////

export const route = '/bin-rota';

// Type and Interface Definitions /////////////////////////////////////////////

/** The shape of request `query` parameters */
interface HandlerQuery {
  width?: string;
  seats?: string;
}
/** The shape of request `body` parameters */
interface HandlerBody {
  width?: number;
  seats?: string;
}

/** An application of the above parameterizations of Request */
type HandlerRequest = Request<unknown, unknown, HandlerBody, HandlerQuery>;

interface BinRotaHandlerProps {
  width: number;
  seats: string[];
}

// Error Handling /////////////////////////////////////////////////////////////

const WIDTH_MISSING_ERR_MSG =
  'Unable to determine row width from request.\n' +
  'Include a numeric `width` with your JSON body or in the request query' +
  'parameters.';

const SEATS_MISSING_ERR_MSG =
  'Unable to determine seats list from request.\n' +
  'Include a `,` comma-delimited string of student names from which to ' +
  'generate the seating chart.';

const UNEVEN_ROWS_ERR_MSG =
  'Unable to evenly distribute the provided `seats` over rows of the ' +
  'specified `width`';

export const validateProps = (
  req: HandlerRequest
): Result<BinRotaHandlerProps, string> => {
  logger.debug('validating parameters');

  const width: Result<number, string> =
    req.query?.width && !isNaN(Number(req.query.width))
      ? Ok(Number(req.query.width))
      : req.body?.width
      ? Ok(req.body.width)
      : Err(WIDTH_MISSING_ERR_MSG);

  const seats: Result<string[], string> = (req.query?.seats
    ? Ok<string, string>(req.query.seats)
    : req.body?.seats
    ? Ok<string, string>(req.body.seats)
    : Err<string, string>(SEATS_MISSING_ERR_MSG)
  ).map<string[]>((seats: string) => seats.replace(/"|\n/g, '').split(','));

  const rowsAreEven: Result<boolean, string> = seats.match({
    // If we don't have seats, we don't need to report an error here.
    Err: () => Ok<boolean, string>(false),
    // Otherwise,
    Ok: (seats: string[]) =>
      width.match({
        Err: () => Ok<boolean, string>(false),
        Ok: (w: number) =>
          Ok<boolean, string>(seats.length % w === 0).andThen((even) =>
            even
              ? Ok<boolean, string>(true)
              : Err<boolean, string>(UNEVEN_ROWS_ERR_MSG)
          ),
      }),
  });

  const errors: string[] = [width, seats, rowsAreEven].reduce(
    (acc, current) =>
      current.match({
        Ok: () => acc,
        Err: (e: string) => [...acc, e],
      }),
    [] as string[]
  );

  logger.debug('validation complete');

  return errors.length
    ? Err('Parameter Errors:\n' + errors.join('\n'))
    : Ok({
        width: width.unwrapOr(0),
        seats: seats.unwrapOr([] as string[]),
      } as BinRotaHandlerProps);
};

// Route Handler //////////////////////////////////////////////////////////////

export const handler = (
  req: HandlerRequest,
  res: Response,
  next: NextFunction
): void => {
  validateProps(req).match({
    Err: (e) => {
      logger.debug('Validation received errors');
      next(new TypeError(e));
    },
    Ok: ({ width, seats }) => {
      logger.debug('Validation produced no errors');
      const seatingChart = seats.reduce(
        (acc: string[][], seat: string) => {
          const lastRow = acc.length - 1;
          if (acc[lastRow].length < width) {
            acc[lastRow].push(seat);
          } else {
            acc.push([seat]);
          }
          return acc;
        },
        [[]]
      );
      logger.debug('Writing output');
      res.write(JSON.stringify(binRota2(seatingChart)));
      res.end();
    },
  });
};

// Exports ////////////////////////////////////////////////////////////////////

const router = Router();

router.get(route, handler);

export default router;
