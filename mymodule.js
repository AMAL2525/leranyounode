var fs = require('fs');
const path = require('path');

module.exports= (dir, ext, callback) => {
    
    fs.readdir(dir, (err,list) => {
        if (err) return callback(err);
        const filteredList = list.filter((file) => {
            if (path.extname(file) === ".md")
                return file
        });
        return callback(null, filteredList);
    }
    );

}