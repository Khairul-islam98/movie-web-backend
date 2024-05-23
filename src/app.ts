import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { MovieRouter } from './app/modules/movie/movie.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

app.use('/api/v1/movies', MovieRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.all('*', (req: Request, res: Response) => {
  res.send('Route not found!');
});

export default app;
