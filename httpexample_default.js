const http = require('https')

/* 

Line 19 - It is necessary to use 'http' or 'https' prefix in HTTP request URL.
For example: www.google.com (wrong)
      http://www.google.com (correct)

If you want to use http in your request, 
you have to make sure that your http variable requires 'http' at line 1
For example: 
line 19 ->  https://www.google.com
line 1  ->  const http = require('https')
---------------------------------------------
line 19 ->  'http://www.google.com'
line 1  ->  const http = require('http')

*/
const req = http.request('https://www.google.com', (res) =>{
    res.on('data', (chunk)=>{
        console.log(`Data chunk: ${chunk}`);
    });
    res.on('end', () =>{
       console.log('End of the process');
    });
});

/* 

end() function is necessary to trigger the request to be sent.
You can see by commenting out the line 34, HTTP request won't be sent.

*/
req.end();