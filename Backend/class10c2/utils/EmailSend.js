
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EPASS
    },
});

function EmailSend(to, subject, msg) {
    transporter.sendMail({
        to: to,
        subject: subject,
        text: msg,

    })
}
module.exports = EmailSend;