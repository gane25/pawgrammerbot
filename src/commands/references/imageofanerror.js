export default {
  name: 'imageofanerror',
  description: 'Asking for text instead of error images',
  aliases: ['imageofexception'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        "❌ **Don't post images of errors:** Please copy and paste the error text into a code block so we can read and search it easily.\nhttps://idownvotedbecau.se/imageofatextualerror/",
      );
    } catch (err) {
      console.error(err);
    }
  },
};
