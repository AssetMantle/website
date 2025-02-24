"use server";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail({ name, businessEmail, companyName, message }) {
  try {
    const msg = {
      to: "hello@assetmantle.one", // Email to receive the form submission
      from: "hello@assetmantle.com", // Verified sender email
      subject: "New Contact for AM Website : " + name, // Subject of the email
      text: `You have received a new message from ${name} (${businessEmail}) of ${companyName}.\n\nMessage:\n${message}`, // Plain text version
      html: `<strong>You have received a new message from ${name} (${businessEmail}) of ${companyName}</strong><br><br><p>Message: ${message}</p>`, // HTML version
      cc: businessEmail, // Send a copy to the user’s email
    };

    await sgMail.send(msg);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("SendGrid Error:", error.response?.body || error.message);
    return { success: false, message: "Email failed to send" };
  }
}
