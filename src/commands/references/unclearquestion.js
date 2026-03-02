export default {
  name: 'unclearquestion',
  description: 'The question makes no sense',
  callback: async (client, message) => {
    try {
      return message.channel.send(
        "😕 **Unclear:** We don't quite understand what you are asking. Please rephrase your question more clearly.\nhttps://idownvotedbecau.se/unclearquestion/",
      );
    } catch (err) {
      console.error(err);
    }
  },
};
