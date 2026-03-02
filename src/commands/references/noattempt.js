export default {
  name: 'noattempt',
  description: 'User has shown no attempt at solving the problem',
  callback: async (client, message) => {
    try {
      return message.channel.send(
        "🤔 **Show your work:** We are happy to help, but we won't write the code for you. What have you tried so far?\nhttps://idownvotedbecau.se/noattempt/",
      );
    } catch (err) {
      console.error(err);
    }
  },
};
