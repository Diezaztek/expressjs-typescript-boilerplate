import express from 'express';
import exampleRoutes from './routes/example.route';

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
    res.send('Hello, World!');
});
app.use('/example', exampleRoutes);

export default app
