export default {
  name: 'askbetter',
  description: 'Guidelines on how to ask a quality question',
  aliases: ['askbetterfirst', 'how2ask', 'howtoask', 'ask'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '✅ **How to Ask:** Please provide context, what you have tried, and your expected results.\nhttps://stackoverflow.com/help/how-to-ask',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
