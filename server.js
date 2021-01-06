const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Check Check

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const taskRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const articleRouter = require('./routes/articles');
const reviewsRouter = require('./routes/reviews');

//Backend routes to begin with api
app.use('/api/tasks', taskRouter);
app.use('/api/users', usersRouter);
app.use('/api/articles', articleRouter);
app.use('/api/reviews', reviewsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


// Pages whose routing is done!
// 1.Dashboar (Except Progress views comments etc.)
// 2. Task Display Page
// 3. Profile

