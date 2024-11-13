// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, email, message } = req.body;

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Remplacez par votre service de messagerie
      auth: {
        user: process.env.EMAIL_USER, // Définissez EMAIL_USER dans .env
        pass: process.env.EMAIL_PASS, // Définissez EMAIL_PASS dans .env
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // L'adresse e-mail de réception
      subject: 'Nouveau message de contact',
      text: `Nom: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message envoyé avec succès' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi du message' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
