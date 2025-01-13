import mongoose from 'mongoose';

const awarenessNotificationSchema = new mongoose.Schema({
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

const awarenessNotification = mongoose.model('awarenessNotification', awarenessNotificationSchema);

export default awarenessNotification;