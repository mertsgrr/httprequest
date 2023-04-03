/* 
{ get } is ECMAscript syntax
We can directly give the name of the function we will use.
In this case I used 'get' function
Thus, we don't need to use variables like 'req' and req.end();
*/
const { get } = require('https');

get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', ()=>{
        console.log('No more data');
    });
});

/*

The HTTP request consists of two parameters - line 9
First parameter:  URL to make HTTP request
Second parameter: callback function (res)

I gave the name 'res' to the callback function.
In the callback function; 
res.on('data') will return the chunk of data that we want to see.
res.on('end') will return something when the process is completed

*/