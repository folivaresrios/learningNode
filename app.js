const port = process.env.PORT || 5000;
import express from 'express';

const app = express();

import bootcamps from './routes/bootcamps.js';

//Settings
app.set('port', port);

//Route files
app.use('/api/v1/bootcamps', bootcamps);

export default app;
