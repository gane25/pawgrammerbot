export default {
  name: 'xyproblem',
  description: 'The XY Problem',
  aliases: ['xy'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '🎯 **XY Problem:** You are asking about your "solution" rather than the actual problem. What are you trying to *achieve*?\nhttps://xyproblem.info/',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
