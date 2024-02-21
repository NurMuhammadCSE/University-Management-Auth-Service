import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserService } from './app/modules/users/user.service';
import { UserRoute } from './app/modules/users/user.route';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.get('/', async (req: Request, res: Response) => {
//   await UserService.createUser({
//     id: '00001',
//     password: '1234',
//     role: 'student'
//   })
//   res.send('University Management');
// });

// Application Routes
app.use('/api/v1/users', UserRoute.router)

app.get('/', async (req: Request, res: Response) => {

  res.send('University Management');
});

export default app;
