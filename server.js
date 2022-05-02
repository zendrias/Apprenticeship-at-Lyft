import express from 'express';
const app = express();


// Middleware configuration
app.use(express.json());

// Router imports
import indexRouter from './routes/index.js';
import testRouter from './routes/test.js';

// Router configuration
app.use('/', indexRouter);
app.use('/test', testRouter);
app.use('/api/test', testRouter);
app.use('*', (req, res) => res.status(404).json({ status: 'Not Found' }));

// Post Listener
const PORT = 3001;

app.listen(PORT, () => (
  console.log(`Now listening on port ${3001}`)
));