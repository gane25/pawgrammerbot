export default {
  name: 'tryit',
  description: 'Try it and see / TIAS',
  aliases: ['tias'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '🧪 **Try It and See:** The best way to find out is to run the code yourself and see what happens!',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
