import fs from 'fs';
import express from 'express';
import {} from 'dotenv/config';
import example from './example';

const router = express.Router();

let fe;

router.use('/api/examples', example);

router.use(express.static('/frontend/build/'));

router.route(['/', '/*']).all((req, res) => {
  if (fe) {
    return res.send(fe);
  }

  fs.readFile('/frontend/build/index.html', 'utf8', (err, index) => {
    if (err) {
      return res.send(err);
    }

    fe = index;
    res.send(index);
  });
});

export default router;
