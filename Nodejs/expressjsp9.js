const express = require('express');
const app = express();
 
// Setting multiple locals variable
app.locals.domain = 'www.sample.com'
app.locals.age = '24'
app.locals.company = 'ABC Ltd'
 
console.log(app.locals);
