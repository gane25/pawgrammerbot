export default {
  name: 'itsnotworking',
  description: 'Asking for more detail than "it is not working"',
  aliases: ['itdoesntwork', 'notworking', 'doesntwork'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        "🛠️ **\"It doesn't work\" isn't enough:** Please describe *how* it isn't working. Are there errors? Is the output wrong?\nhttps://idownvotedbecau.se/itdoesntwork/",
      );
    } catch (err) {
      console.error(err);
    }
  },
};
