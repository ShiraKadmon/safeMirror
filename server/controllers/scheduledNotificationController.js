// import cron from 'node-cron';
// import  notification  from '../models/notification.js';
// import User from '../models/user.js'; 
// import { sendPhoneNotification } from './notificationController.js';


// // Running the schedule three times a day (morning, noon, evening)
// // For each user a notification is selected according to their age
// // send the notification to phon number
// export const scheduleDailyNotifications = (io) => {

//     // TESTING RUN EVERY MINUTE
//     cron.schedule('*/1 * * * *', async () => { 
//         try {
//             const users = await User.find({});
//             console.log(`✅ Users Fetched: ${users.length}`);
//             users.forEach(user => chooseNotification(user, 'test-run', io));
//         } catch (error) {
//             console.error('❌ Error fetching users:', error);
//         }
//     });

//     try{
//     // morning (8:00)
//     cron.schedule('0 8 * * *', async () => {
//         try{
//         const users = await User.find({});
//         users.forEach(user => chooseNotification(user, 'בוקר', io));
//         } catch (error) {
//             console.error('Error scheduling morning notifications:', error);
//         }
//     });

//     // noon (14:00)
//     cron.schedule('0 14 * * *', async () => {
//         try{
//         const users = await User.find({});
//         users.forEach(user => chooseNotification(user,'צהריים', io));
//         } catch (error) {
//             console.error('Error scheduling noon notifications:', error);
//         }
//     });

//     // evening (20:00)
//     cron.schedule('0 20 * * *', async () => {
//         try{
//         const users = await User.find({});
//         users.forEach(user => chooseNotification(user,'ערב', io));
//         } catch (error) {
//             console.error('Error scheduling evening notifications:', error);
//         }
//     });

//     console.log('Notification scheduling: morning, noon and evening activated');
//     } catch (error) {
//         console.error('Error setting up scheduled notifications:', error);
//     }
// };

// // choose notification according to the time and age of the user
// const chooseNotification = async (user, timeOfDay, io) => {
//     try {
//         const messages = await getNotificationFromDB(user.ageGroup, timeOfDay); 

//         if (messages.length > 0) {
//             const randomMessage = messages[Math.floor(Math.random() * messages.length)];
//             console.log(`[${timeOfDay}] Sending a notification: ${randomMessage.message}`);
//             // send the notification to the user's phone
//             await sendPhoneNotification(user.phoneNumber, randomMessage.message);

//             // send the notification to the home page
//             io.emit('newNotification', {
//                 message: randomMessage.message,
//                 userName: user.name,
//                 timeOfDay: timeOfDay
//             });

//             console.log(`message sent to-${user.phoneNumber} and to the home page`);

//         } else {
//             console.log(`No messages found for the time ${timeOfDay}`);
//         }
//     } catch (error) {
//         console.error('Error sending notification:', error);
//     }
// };

// // get the notifications messages from the database
// export const getNotificationFromDB = async (ageGroup, timeOfDay) => {
//     try {
//         const messages = await notification.find({ ageGroup, timeOfDay });
//         return messages;
//     } catch (error) {
//         console.error('Error fetching messages from the database:', error.message);
//         return [];
//     }
//   };