// why isn't write in the methods we logged
// outut a prompt

var commands = require('./commands');
//var fs = require('fs')


process.stdout.write('prompt >');

process.stdin.on('data', function(data){
  var cmd = data.toString().trim().split(" ");
  //var cmd = data.toString().trim();
  //var func = cmd[0];
  
  function spaceDelimited(array) {
      var current;
      var func = commands[array[0]];
      var args = array.slice(1);
      func(current,args);
  }

  spaceDelimited(cmd);
  //commands[func]();

  process.stdout.write('You typed: ' + data);
  process.stdout.write('\nprompt >');

});


//console.log(process)
//setTimeout(function(){console.log('hey')}, 4000)
