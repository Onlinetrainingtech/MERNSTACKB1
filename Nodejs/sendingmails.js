var nodemailer = require('nodemailer');

var t1 = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'azartechnet@gmail.com',
    pass: 'rumuqvdcnorchswx'
  }
});

var mailOptions = {
  from: 'azartechnet@gmail.com',
  to: '<SenderEmail>',
  subject: 'Sending Email using Node.js',
  //text: 'That was easy!'
  html:'<h1 style="color:red">Welcome to MERN Stack Session</h1>'
};

t1.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});