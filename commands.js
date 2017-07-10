var fs = require('fs')
var listFiles = function(args){
  fs.readdir('.', function(err, files){
    if (err) throw err;
    var async_counter = files.length;
    files.forEach(function(file){
      process.stdout.write(file.toString() + "\n");
      async_counter--;
      if(async_counter == 0){
        process.stdout.write("prompt > ");
      }
    })
  })
}
var head = function(files){
  var async_counter = files.length;
  files.forEach(function(file){
    fs.readFile(file, function(err, data){
      if(err){
        throw err;
      }
      else {
        data = data.toString().split('\n');
        var line = 0;
        while(line < 10){
          console.log(data[line]);
          line++;
        }
        async_counter--;
        if(async_counter == 0){
          process.stdout.write("prompt > ");
        }
      }
    })
  })
};

var sort = function(files){
  var async_counter = files.length;
  files.forEach(function(file){
    fs.readFile(file, function(err, data){
      if(err){
        throw err;
      }
      else {
        data = data.toString().split('\n');
        var line = 0;
        while(line < data.length){
          console.log(data[line].split(' ').sort().join(' '));
          line++;
        }
        async_counter--;
        if(async_counter == 0){
          process.stdout.write("prompt > ");
        }
      }
    })
  })
};

var wc = function(files){
  var async_counter = files.length;
  files.forEach(function(file){
    fs.readFile(file, function(err, data){
      if(err){
        throw err;
      }
      else {
        data = data.toString().split('\n');
        console.log(data.length);
        async_counter--;
        if(async_counter == 0){
          process.stdout.write("prompt > ");
        }
      }
    })
  })
};

var tail  = function(files){
  var async_counter = files.length;
  files.forEach(function(file){
    fs.readFile(file, function(err, data){
      if(err){
        throw err;
      }
      else {
        data = data.toString().split('\n');
        var line = data.length-10;
        while(line < (data.length-1)){
          console.log(data[line]);
          line++;
        }
        async_counter--;
        if(async_counter == 0){
          process.stdout.write("prompt > ");
        }
      }
    })
  })
};
var displayFiles = function(files){
  var async_counter = files.length;
  files.forEach(function(file){
    fs.readFile(file, function(err, data){
      if(err){
        throw err;
      }
      else {
        console.log(data.toString());
        async_counter--;
        if(async_counter == 0){
          process.stdout.write("prompt > ");
        }
      }
    })
  })
}

var echoFunc = function(args){
  var string = args.join(' ');
  process.stdout.write(string+'\n');
}


module.exports = {
  pwd: function(args){
    console.log(process.cwd());
    setTimeout(function(){
      process.stdout.write("prompt > ");
    },0);
  },
  date: function(args){
    console.log(new Date(Date.now()));
    setTimeout(function(){
      process.stdout.write("prompt > ");
    },0);
  },
  ls: listFiles,
  echo: echoFunc,
  cat: displayFiles,
  head:head,
  tail:tail,
  sort:sort,
  wc:wc
}
