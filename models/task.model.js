const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    
    taskId: {
        type: String
    },
    taskName: {
        type: String
    },
    // This is Short description of the task not the complete task!! We need to figure out a way on frontend to print description while we just save entire question
    taskDesc : {
        type: String  
    },
    taskLogo: {
        type: String   
    },
    // Extra Routes added by Yash
    progress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    daysSpent: {
        type: Number,
        default: 0
    },
    noOfViews: {
        type: Number,
        default: 0
    },
    noOfReviews: {
        type: Number,
        default: 0
    },

    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;