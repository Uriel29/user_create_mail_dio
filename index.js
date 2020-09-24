
import express from 'express';
import UserController from './app/controllers/UserControllers.js';
import BullBoard from 'bull-board';

const app = express();
BullBoard.setQueues(Queue.Queue.map(queue => queue.bull));

app.use('/adminq', BullBoard.UI)

app.use(express.json())


app.post('/users', UserController.store);

app.listen(8080, () =>
     console.log('Example app listening on port 8080!'),
);
