
var commands = require('./commands');

process.stdout.write('prompt >');

process.stdin.on('data', function(data){
  var cmd = data.toString().trim().split(" ");
  function spaceDelimited(array) {
      var func = commands[array[0]];
      var args = array.slice(1);
      func(args);
  }
  spaceDelimited(cmd);
  process.stdout.write('You typed: ' + data+ '\n');
  //process.stdout.write('\nprompt >');

});

