const fs = require('fs');
const util = require('util');

// Declaring the variables
const text = 'first write in the file1';
const file = 'test.txt';
const encode = 'utf-8';

//Writing in async way in a file using the fs 📝
fs.writeFile(file, text, (err) => {
    if(err) console.error(err);
    return;
});

//Reading in async way the result of the writing 🤓
fs.readFile(file, encode, (err, data) => {
    if (err) { console.error(err); return; }
    console.log(data);
});

//Verifying the stat of the file 📂
fs.stat(file, (err, stat) => {
    if (err) { console.error(err); return; }
    console.log(stat);

    //Open the file 🗃
    fs.open(file, 'r', (err, fd) => {
        if (err) { console.error(err); return; } 
        const buffer = Buffer.alloc(stat.size);

        //Using a buffer to read and show what is the file 📚
        fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer)=>{
            if (err) { console.error(err); return; } 
            const data = buffer.toString('utf-8', 0, buffer.length);
            console.log(data);

            //Closing the opened file 🔒
            fs.close(fd, (err) => {
                if (err) { console.error(err); return; } 
            });
        });
    });
});

