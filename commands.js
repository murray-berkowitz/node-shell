var fs = require('fs')

var listFiles = function(input, args){
    fs.readdir('.', function(err, files){
    if (err) throw err;
    files.forEach(function(file){
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  })
}


var echoFunc = function(input, args){
  var string = args.join(' ');
  process.stdout.write(string+'\n');
}


module.exports = {
  pwd: function(input, args){
    console.log(process.cwd())
  },
  date: function(input, args){
    console.log(new Date(Date.now()))
  },
  ls: listFiles,
  echo: echoFunc
}
