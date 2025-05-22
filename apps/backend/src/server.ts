import config from '~src/config/config';
import app from './app';

app.listen(config.backendPort, () => {
  console.log(`Server running on port ${config.backendPort}`);
});
