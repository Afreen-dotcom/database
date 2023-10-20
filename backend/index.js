import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/EmployeeRoutes.js'
import cors from 'cors';

const app = express()
const port = 4000


// mongo connection
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/soccerDB')
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'");
  next();
});
app.use(express.json());

app.use(cors())
routes(app);
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Employee app listening on port ${port}`)
})