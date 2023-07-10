const franc = require('franc');
const langs = require('langs');
const colors = require('colors')
let result="";
for (var i = 2; i < process.argv.length; i++){
    result += (process.argv[i]);
    if (i!=process.argv.length-1){
        result += " ";
    }
}
// const input = process.argv[3];
// console.log(result);
const code = franc(result);
if (code === 'und'){
    console.log("SORRY, Can't figure out the language. Try with some sample of texts".red);

}
else{
    const language = langs.where("3", code);
    if (language){
        console.log(`Our best guess is ${language.name}`.green);
    } else{
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${code}`.red));
    }
}