export default {
  name: 'mcve',
  description: 'Minimal Complete Verifiable Example',
  aliases: ['mvce'],
  callback: async (client, message) => {
    try {
      return message.channel.send(
        '📦 **MCVE:** Please provide a **M**inimal, **C**omplete, and **V**erifiable **E**xample.\nhttps://stackoverflow.com/help/minimal-reproducible-example',
      );
    } catch (err) {
      console.error(err);
    }
  },
};
