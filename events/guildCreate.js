module.exports = {
    name: "messageCreate",
    async execute(client, guild) {

      const locales = {
        tr: 'tr',
        fr: 'fr',
        de: 'dr'
      };
      
      client.db.set(`locale_${guild.id}`, locales.en);
    }
}
//      arviis.









//   arviis.