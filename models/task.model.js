const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({

    articleTitle: {
        type: String
    },
    articleDesc : {
        type: String  
    },
    articleImages: {
        //   Don't know what to write   
    }

    }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;