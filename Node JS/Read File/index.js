
//This code reads a file named 'starter.txt' and logs its content to the console.
// Note: The file 'starter.txt' should exist in the same directory as this script for it to work correctly.
// If you want to read the file synchronously, you can use fs.readFileSync instead

/*const fs = require('fs');

fs.readFile('./starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
});
*/
// Another way to read the file synchronously

const path = require('path');
const fs = require('fs');
fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}
);


// How to write to a file
fs.writeFile(
    path.join(__dirname, 'write.txt'),
    'This is a new file created by Bakary Gibba',
    (err) => {
        if (err) throw err;
        console.log('File created successfully');
    }
);