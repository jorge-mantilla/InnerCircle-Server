require('dotenv').config();
const nodemailer = require('nodemailer');
const knex = require("knex")(require("../knexfile")); // Assuming you have a knex configuration object

// Define your controller function to handle the form submission
const sendInviteEmail = async (req, res) => {
  const { email, message } = req.body;

  try {
    // Create a Nodemailer transporter using your preferred email service
    const transporter = nodemailer.createTransport({
      service: 'gmail.com', // Replace with your email service provider (e.g., 'Gmail', 'Outlook')
      auth: {
        user: 'mantilla.software@gmail.com',
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'mantilla.software@gmail.com',
      to: email,
      subject: ' Inner Circle Invitation',
      text: 'Hey I am waiting for you over here at Inner Circle! You have to see what is available to use instead of purchase! Saving precious space and time, I am sure you will find something that works. Click the link to join in  www.innercircle.com/register/'
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    // Send a response to the client
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
};

module.exports = {
  sendInviteEmail,
};
