import axios from 'axios';

export const sendWhatsAppMessage = async (From, message) => {
    try {
        const response = await axios.post(
            "https://zagoura-api-k5qp.vercel.app/send-message",
            {
                From: From,
                message: message
            }
        );
        console.log(response)
        if (response.status === 200) {
            console.log('Message sent successfully:', response.data);
            return {
                success: true,
                message: 'Message sent successfully'
            };
        } else {
            console.error('Unexpected response status:', response.status);
            return { success: false, error: 'Unexpected response status' };
        }
    } catch (error) {
        console.error('Failed to send message:', error.response?.data || error.message);

        return {
            success: false,
            error: error.response?.data || error.message
        };
    }
};
