import express from 'express';
import morgan from 'morgan';

const port = process.env.PORT || 5000;
const app = express();

import bootcamps from '../routes/bootcamps.js';

//Settings
app.set('port', port);

//middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

//Route files
app.use('/api/v1/bootcamps', bootcamps);

export default app;
