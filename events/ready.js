module.exports = {
    name: "ready", async execute(arvis) {
        
        console.log(`[AKTİF] ${arvis.user.tag}`);
        arvis.user.setPresence({
            activities: [
                {
                    name: `Made by ❤️ arviis.`,
                    type: "PLAYING"
                }
            ],
            status: "online"
        });
    }
}
//     arviis.









//   arviis.