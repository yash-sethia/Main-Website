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
const profileRouter = require('./routes/profile');
const engagementRouter = require('./routes/engagement');
const taskAnalyticsRouter = require('./routes/taskAnalytics'); 
const adduserdata = require('./routes/adduserdata');
const reviewmore = require('./routes/reviewmore');

//Backend routes to begin with api
app.use('/api/tasks', taskRouter);
app.use('/api/users', usersRouter);
app.use('/api/articles', articleRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/enagagement', engagementRouter);
app.use('/api/taskAnalytics', taskAnalyticsRouter);
app.use('/api/adduserdata', adduserdata);
app.use('/api/reviewmore', reviewmore);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

if(process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


// Pages whose routing is done!
// 1.Dashboar (Except Progress views comments etc.)
// 2. Task Display Page
// 3. Profile

