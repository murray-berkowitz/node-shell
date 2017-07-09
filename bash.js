// why isn't write in the methods we logged
// outut a prompt

var commands = require('./commands');
//var fs = require('fs')


process.stdout.write('prompt >');

process.stdin.on('data', function(data){
  var cmd = data.toString().trim().split(" ");
  //var cmd = data.toString().trim();
  var func = cmd[0]
  
  commands[cmd]()

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > \n');

});


//console.log(process)
//setTimeout(function(){console.log('hey')}, 4000)
