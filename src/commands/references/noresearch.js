export default {
  name: 'noresearch',
  description: 'User has not searched for the answer',
  aliases: ['research'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '📚 **Do some research:** This is a common question. Please check the documentation or search online before asking.\nhttps://idownvotedbecau.se/no-research/',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
