const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

const user = process.env.GAUTH_USERNAME
const pass = process.env.GAUTH_PASSWORD

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: user,
    pass: pass,
  },
});

// async..await is not allowed in global scope, must use a wrapper
module.exports.main= async function main(name, email , message) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "combohollow@gmail.com", // sender address
    to: "combohollow@gmail.com", // list of receivers
    subject: "Mail from Portfolio", // Subject line
    text: `From: ${email}
            \n${name} has a message:
            \n${message}
            `, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

