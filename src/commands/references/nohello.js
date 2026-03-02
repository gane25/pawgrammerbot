export default {
  name: 'nohello',
  description: 'Dont just say hello, ask the question',
  callback: async (client, message) => {
    try {
      return message.channel.send(
        "👋 **Don't just say hello:** Please ask your question directly. It saves time for everyone!\nhttps://nohello.net/",
      );
    } catch (err) {
      console.error(err);
    }
  },
};
