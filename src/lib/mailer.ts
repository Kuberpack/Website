import nodemailer from 'nodemailer';

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (transporter) return transporter;

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      'Email is not configured: set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local'
    );
  }

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  return transporter;
}

export interface InquiryField {
  label: string;
  value: string;
}

export interface InquiryAttachment {
  filename: string;
  content: Buffer;
}

export async function sendInquiryEmail({
  subject,
  fields,
  replyTo,
  attachments,
}: {
  subject: string;
  fields: InquiryField[];
  replyTo?: string;
  attachments?: InquiryAttachment[];
}) {
  const user = process.env.GMAIL_USER;
  const to = process.env.CONTACT_TO_EMAIL || user;

  const text = fields.map((f) => `${f.label}: ${f.value}`).join('\n');
  const html = `
    <table style="font-family: sans-serif; font-size: 14px; border-collapse: collapse;">
      ${fields
        .map(
          (f) => `
        <tr>
          <td style="padding: 6px 12px; font-weight: bold; vertical-align: top; white-space: nowrap;">${escapeHtml(f.label)}</td>
          <td style="padding: 6px 12px; white-space: pre-wrap;">${escapeHtml(f.value)}</td>
        </tr>`
        )
        .join('')}
    </table>
  `;

  await getTransporter().sendMail({
    from: `"Kuberpack Website" <${user}>`,
    to,
    replyTo,
    subject,
    text,
    html,
    attachments,
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
