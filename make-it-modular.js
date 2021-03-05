
var myModule = require('./mymodule.js');

const pathList= process.argv[2];
const extention= process.argv[3];
myModule(pathList, extention, (err,filteredList) =>{
    if (err) return console.error(err);
    filteredList.forEach( list => {
        console.log(list);
});
});

