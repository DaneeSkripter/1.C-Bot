const { Listener } = require('gcommands');
const { ActivityType } = require("discord.js")
// Create a new listener listening to the "ready" event
new Listener({
	// Set the name for the listener
	name: 'message',
	// Set the event to listen to
	event: 'messageCreate',
	// The function thats called when the event occurs
	run: (message) => {
        const list = ["negr", "nigger", "nigga", "cernoch"]
        const list2 = ["uwu", "oniichan", "onichan", "mnau", "sablo", "sablik", "siblik"]
        const list3 = ["cinan", "vietnamec", "japonec", "zluty", "cingcong", "ching chong"]
        list.forEach((item) => {
            if (message.content.includes(item)) {
                message.react("🙋🏿‍♂️")
            }
        })
        list2.forEach((item) => {
            if (message.content.includes(item)) {
                message.react("👀")
            }
        })
        list3.forEach((item) => {
            if (message.content.includes(item)) {
                message.react("🍚")
            }
        })
    }
});
