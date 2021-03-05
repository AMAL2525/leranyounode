var fs = require('fs');
const path = require('path')
const pathList = process.argv[2]
fs.readdir(pathList, (err, list) => {
    if (err) {
        return console.error(err);
    }
    const filteredList = list.filter((file) => {
        if (path.extname(file) === ".md")
            return file
    });
    filteredList.forEach(function (list) {
        console.log(list);
    })



});
