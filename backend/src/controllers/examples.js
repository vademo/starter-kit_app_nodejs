import Errors from '../errors';
import {
  getExampleById,
  getAllExamples,
} from '../services/example';

export function getExample(req, res, next) {
  getExampleById(req.params.exampleId)
    .then((example) => {
      if (!example) {
        next(Errors.notFound({ message: `example with id ${req.params.exampleId} not found` }));
      }
      res.json(example);
    })
    .catch(next);
}

export function getExamples(req, res, next) {
  getAllExamples()
    .then(examples => res.json(examples))
    .catch(next);
}
