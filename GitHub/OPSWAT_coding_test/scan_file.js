var request = require('request');
var fs = require("fs");

var formData = {
    file: fs.createReadStream(__dirname + '/file')
};

request.post({
        url: 'https://api.metadefender.com/v2/file',
        formData: formData,
        headers: {
            apikey: process.env.APIKEY
        }
    },
    function(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        console.log(body);
    }
);