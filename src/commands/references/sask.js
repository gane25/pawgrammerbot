export default {
  name: 'sask',
  description: 'Short Ask - asking to ask',
  callback: async (client, message) => {
    try {
      return message.channel.send(
        "❓ **Don't ask to ask:** Just post your question. If someone knows the answer, they will reply.\nhttps://dontasktoask.com/",
      );
    } catch (err) {
      console.error(err);
    }
  },
};
