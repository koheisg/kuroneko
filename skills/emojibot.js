module.exports = function(controller) {

    controller.hears(['emoji'], 'direct_message', function(bot, message) {
        controller.storage.users.get(message.user, function(err, user) {
            var a = message.event.text.split(' ');
            var command = a[1];
            var symbol = a[2];
            var moji = a[3]
            
            var url = 'https://emoji.pine.moe/emoji'
                    + '?align=center'
                    + '&back_color=00000000'
                    + '&color=00FF00FF'
                    + '&font=notosans-mono-bold'
                    + '&public_fg=true'
                    + '&size_fixed=true'
                    + '&stretch=true'
                    + '&text=' + moji;
          
            var yml = require('js-yaml').dump({"emojis": [{'name': symbol, 'src': url}]});
            var fs = require('fs')
            fs.writeFileSync("./tmp/output.yml" , yml);
          
            //uploadEmoji(symbol, url);
            bot.reply(message, ":" + symbol + ":");
        });

    });
}

