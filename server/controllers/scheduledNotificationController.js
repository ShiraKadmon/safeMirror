import cron from 'node-cron';
import  awarenessNotification  from '../models/awarenessNotification.js';
import User from '../models/user.js'; 

// Set sending times: morning, noon and evening
const sendAwarenessMessage = async (user, timeOfDay) => {
    try {
        const messages = await awarenessNotification.find({ // draw notifications from the collection
            ageGroup: user.ageGroup,
            timeOfDay: timeOfDay}); 

        if (messages.length > 0) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            console.log(`[${timeOfDay}] Sending a notification: ${randomMessage.message}`);
        }
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

// Running the schedule three times a day (morning, noon, evening)
export const scheduleDailyNotifications = () => {
    try{
    // morning (8:00)
    cron.schedule('0 8 * * *', async () => {
        try{
        const users = await User.find({});
        users.forEach(user => sendAwarenessMessage(user, 'morning'));
        } catch (error) {
            console.error('Error scheduling morning notifications:', error);
        }
    });

    // noon (14:00)
    cron.schedule('0 14 * * *', async () => {
        try{
        const users = await User.find({});
        users.forEach(user => sendAwarenessMessage(user,'noon'));
        } catch (error) {
            console.error('Error scheduling noon notifications:', error);
        }
    });

    // evening (20:00)
    cron.schedule('0 20 * * *', async () => {
        try{
        const users = await User.find({});
        users.forEach(user => sendAwarenessMessage(user,'evening'));
        } catch (error) {
            console.error('Error scheduling evening notifications:', error);
        }
    });

    console.log('Notification scheduling: morning, noon and evening activated');
    } catch (error) {
        console.error('Error setting up scheduled notifications:', error);
    }
};
