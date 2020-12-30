const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    
    taskId: {
        type: String
    },
    taskName: {
        type: String
    },
    taskDesc : {
        type: String  
    },
    taskLogo: {
        type: String   
    }

    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;