import dotenv from 'dotenv';

dotenv.config();

interface Config {
  backendPort: number;
  nodeEnv: string;
  mongoUrl: string;
}

const config: Config = {
  backendPort: Number(process.env.BACKEND_PORT) || 3000,
  nodeEnv: process.env.NODE_ENV ?? 'development',
  mongoUrl: process.env.MONGO_URL ?? '',
};

export default config;
