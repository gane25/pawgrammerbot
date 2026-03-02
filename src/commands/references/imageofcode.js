export default {
  name: 'imageofcode',
  description: 'Asking for text instead of code images',
  aliases: ['pictureofcode', 'imgofcode'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        "💻 **Don't post images of code:** Please paste your code as text using code blocks ( \` \` \` ) so we can copy and test it.\nhttps://idownvotedbecau.se/imageofcode/",
      );
    } catch (err) {
      console.error(err);
    }
  },
};
