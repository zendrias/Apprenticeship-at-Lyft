import express from 'express';
const app = express();


// Middleware configuration
app.use(express.json());

// Router imports
import indexRouter from './routers/index.js'

// Router configuration
app.use('/', indexRouter)






// Post Listener

const PORT = 3001;

app.listen(PORT, () => (
  console.log(`Now listening on port ${3001}`)
))