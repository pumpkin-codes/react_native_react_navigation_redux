var fs = require('fs');
console.log("Incrementing build number...");
fs.readFile("android/app/build.gradle","utf-8",function(err,content){
    if(err) throw err;
    console.log(content)
    
});

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});