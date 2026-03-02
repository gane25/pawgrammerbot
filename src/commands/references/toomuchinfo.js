export default {
  name: 'toomuchinfo',
  description: 'Post contains irrelevant information',
  callback: async (client, message) => {
    try {
      return message.channel.send(
        'ℹ️ **Information Overload:** Please stick to the details relevant to the technical issue at hand.',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
