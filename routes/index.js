const express = require('express');
const path = require("path");
const router = require("express").Router();
const nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  console.log(message)
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: transport.auth.user, 
    subject: 'New Message from Portfolio Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
      console.log(mail);
    }
  })
})

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});


module.exports = router;