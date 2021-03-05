// Read environment variables
import dotenv from 'dotenv';
import app from './config/app.js';

dotenv.config();
import { init } from './config/database.js';

init();
// Server is listening
const server = app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
  console.log('Environment:', process.env.NODE_ENV);
});

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
