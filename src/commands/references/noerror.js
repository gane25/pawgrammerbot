export default {
  name: 'noerror',
  description: 'User did not provide the error message',
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '⚠️ **Missing Error:** If you are getting an error, please paste the full stack trace/message here.\nhttps://idownvotedbecau.se/noerror/',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
