const {model, Schema} = require('mongoose');

const trainingSchema = new Schema({
    trainingName: String,
    trainingDescription: String,
    trainerName: String,
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'trainers'
    }


})

module.exports = model('Training', trainingSchema);
