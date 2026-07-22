const transporter = require('../config/mailer');

let sendContactMessage = async (req, res) => {
  let { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send message' });
  }
};

module.exports = { sendContactMessage };