const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname);

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach((file) => {
        if (path.extname(file) === '.json') {
            const filePath = path.join(directoryPath, file);
            const rawData = fs.readFileSync(filePath);
            try {
                const json = JSON.parse(rawData);
                console.log('---');
                console.log('File:', file);
                console.log('Title:', json.title || 'No Title');
                console.log('Code URL:', json.htmlCode ? json.htmlCode.downloadUrl : 'No Code URL');
                console.log('Screenshot URL:', json.screenshot ? json.screenshot.downloadUrl : 'No Screenshot URL');
            } catch (e) {
                console.error('Error parsing', file, e.message);
            }
        }
    });
});
