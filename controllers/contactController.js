const gmail = require('../config/mailer');

let sendContactMessage = async (req, res) => {
  let { name, email, message } = req.body;

  try {
    let messageLines = [
      `From: "Consoul Studios" <${process.env.MAIL_FROM}>`,
      `To: ${process.env.CONTACT_RECEIVER}`,
      `Reply-To: ${email}`,
      `Subject: New contact form message from ${name}`,
      `Content-Type: text/plain; charset="UTF-8"`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      ``,
      `Message:`,
      message,
    ];

    let raw = Buffer.from(messageLines.join('\n'))
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw },
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to send message' });
  }
};

module.exports = { sendContactMessage };