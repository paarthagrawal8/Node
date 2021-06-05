import express from 'express';
import usersRoutes from './routes/users.js'
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;
app.use(bodyParser.json());

app.get('/' , (req, res ) => res.send ("hello from home"));
app.use('/users' ,usersRoutes);

app.listen(PORT , () => console.log(`server Running on port: http://localhost:${PORT}`))
