const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ramyamahendran96@gmail.com',
        pass: 'mahendran96'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: 'ramya mahendran <ramyamahendran96@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: dest,
            subject: 'Welcome', // email subject
            html: `<p style="font-size: 16px;">Hi,</p>
                <br />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX2Z4IR_RJZpSOfW5UkyE-mXXYVV3DJc5otwHZFvkD9BkniLS&s" />
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});
