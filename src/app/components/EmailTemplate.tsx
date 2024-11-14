import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>You have received a new message from the contact form on your Real Estate Agent Website.</p>
      <h2>Contact Details:</h2>
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
      </ul>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  );
}