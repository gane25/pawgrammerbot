export default {
  name: 'tldr',
  description: "Too long, didn't read (requesting summary)",
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '📝 **TL;DR:** Your post is quite long. Could you please provide a short summary of the main issue?',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
