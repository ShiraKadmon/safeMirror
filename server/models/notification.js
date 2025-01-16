import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    ageGroup: {
        type: String, 
        required: true
    },
    
    timeOfDay: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const notification = mongoose.model('Notfication', notificationSchema, 'Awareness-Message');

export default notification;