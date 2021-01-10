const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json({taskData : tasks}))
    .catch(err => res.status(400).json('Error: ' + err));
});


// What is this doing ? username, Date, Duration schema mei nhi h!!!.
// Add taskId ka random logic as well. May be a auto incrrmenting mode or something ? 
router.route('/add').post((req, res) => {
  const taskId = req.body.taskId;
  const taskName = req.body.taskName;
  const taskDesc = req.body.taskDesc;
  const taskLogo = req.body.taskLogo;
  const progress = req.body.progress;
  const daysSpent = req.body.daysSpent;
  const noOfViews = req.body.noOfViews;
  const noOfReviews = req.body.noOfReviews;

  const newTask = new Task({
    taskId,
    taskName,
    taskDesc,
    taskLogo,
    progress,
    daysSpent,
    noOfViews,
    noOfReviews
  });

  newTask.save()
  .then(() => res.status(200).json('Task added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


// Route not working
router.route('/:taskId').get((req, res) => {
  Task.findById(req.params.taskId)
    .then(task => res.status(200).json({taskData : task}))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;