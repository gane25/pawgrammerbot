export default {
  name: 'nocode',
  description: 'User provided no code',
  aliases: ['showcode', 'postcode'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '👀 **No code provided:** Please show the relevant parts of your code so we can see what is happening.\nhttps://idownvotedbecau.se/nocode/',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
