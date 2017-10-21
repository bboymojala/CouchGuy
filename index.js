
var autobob = false;

var bonus = ["chuuuuuch. tabernacle. pillar. sermon. amen", "4 out of 5 dentists think this shit is whack", "AWWW SCHITT!!"];
var usedbonus = [];


var PlugAPI = require('plugapi');
var bot = new PlugAPI({
//     email: 'panda@mogasm.com',
	email: 'couchguy@mogasm.com',
    password: 'robot420'
});
console.log(bot.getMedia());

bot.connect('vibe-vibrations'); // The part after https://plug.dj

bot.on('roomJoin', function(room) {
    console.log("Joined " + room);
});

    /**
     * Unhandled events
     */
    bot.on('room_playlist-queue-remove-user', function (data) {
        console.log('[EVENT] room_playlist-queue-remove-user' + JSON.stringify(data, null, 2));
    });
    bot.on('room_playlist-queue-reorder', function (data) {
        console.log('[EVENT] room_playlist-queue-reorder' + JSON.stringify(data, null, 2));
    });
	
	
console.log(bot.getMedia());


// A few sample events

bot.on('djAdvance', function(data) {
    console.log("dj advance: ", data);
});

bot.on('voteUpdate', function(data) {
console.log("vote update: ", data);
});



// basic chat handler to show incoming chats formatted nicely
bot.on('chat', function(data) {
     		
	if (data.message == 'couch guy ?')
	{
		bot.sendChat('gaaa!!, gank, bonus, Imma get more, dont worry bout that');	
	}
	else if (data.message == 'couch')
	{
		bot.sendChat('Got cheetoes?');	
	}
	else if(data.message == 'autobob')
	{
		autobob = !autobob;
		if(autobob)
		{
			bot.sendChat('Yeah buddy');	
			bot.woot();
		}
		else
		{
			bot.woot()
		}
	}
	else if(data.message == 'fuck you')
	{
			bot.sendChat('fuck outta here');	
	}
	else if(data.message == 'right couch guy?')
	{
			bot.sendChat('yup');	
	}
	else if(data.message == 'gank')
	{
		bot.grab();
	}
	else if (data.message == "nice")
	{
		bot.woot();
	}
	else if(data.message == 'bonus')
	{
		bot.woot();
		var fs = require('fs');
		var array = fs.readFileSync("C:\bot\bonus.txt").toString().split("\n");
		var arraylength = array.length;
		
		var bonusnum = Math.floor(Math.random() * (bonus.length-1 - 0 + 1)) + 0;
		var thisbonus = bonus[bonusnum];

		bot.sendChat(thisbonus);	

		bonus.pop(thisbonus);
		usedbonus.push(thisbonus);

		if(bonus.length == 0)
		{
			bonus = usedbonus;
			usedbonus = [];
		}
		
	}
	else if(data.message == 'get up couch guy')
	{
		bot.sendChat("No");
			//bot.addToWaitList();
	}
	else if (data.type == 'emote')
        console.log(data.from + data.message);
    else
        console.log(data.from + "> " + data.message);
});




/* async

var PlugAPI = require('plugapi');

new PlugAPI({
    email: 'panda@mogasm.com',
    password: 'robot420'
}, function(err, bot) {
    if (!err) {
        bot.connect('shaolin-temple-underground'); // The part after https://plug.dj

        bot.on('roomJoin', function(room) {
            console.log("Joined " + room);
        });
    } else {
        console.log('Error initializing plugAPI: ' + err);
    }
});

*/