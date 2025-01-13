import  awarenessNotification  from '../models/awarenessNotification.js';

export const getawarenessNotification = async (req, res) => {
    const { ageGroup } = req.query;
    try {
        const messages = await awarenessNotification.find({ ageGroup });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Error fetching messages", error });
    }
};
