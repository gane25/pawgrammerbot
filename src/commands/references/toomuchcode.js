export default {
  name: 'toomuchcode',
  description: 'User posted an entire project',
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '📂 **Too much code:** Please only post the specific part of the code that is causing the problem.\nhttps://idownvotedbecau.se/toomuchcode/',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
