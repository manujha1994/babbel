import express, { Application,Request, Response,NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const app: Application = express();

let origin = "*";

if(process.env.NODE_ENV === 'production') {
    origin = "http://localhost:3000" //As per the ingress we will define the domain here
}

app.use(cors({
    origin: origin,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Custom-Header'],
}));

app.use(express.json());

// Default ping-pong route for service health check
app.get('/healthcheck', (req: Request, res: Response) => {
    res.send('ok');
});

app.use('/api', routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
