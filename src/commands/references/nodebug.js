export default {
  name: 'nodebugging',
  description: 'User has not attempted to debug',
  aliases: ['nodebug'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '🔍 **Debug first:** Try using `console.log()` or a debugger to trace the values in your code before asking.\nhttps://idownvotedbecau.se/didntdebug/',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
