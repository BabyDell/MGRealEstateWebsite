import { Resend } from 'resend';
import * as React from 'react';
import ContactFormEmail from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ['thatonekid961@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({ name, email, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data, success: true });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}