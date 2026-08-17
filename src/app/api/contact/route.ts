import { NextRequest, NextResponse } from 'next/server';
import { sendInquiryEmail, type InquiryAttachment, type InquiryField } from '@/lib/mailer';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';

    let fields: InquiryField[];
    let subject: string;
    let name: string;
    let email: string;
    let attachments: InquiryAttachment[] | undefined;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      name = String(formData.get('name') || '');
      email = String(formData.get('email') || '');
      const packType = String(formData.get('packType') || '');
      const ply = String(formData.get('ply') || '');
      const volume = String(formData.get('volume') || '');
      const unit = String(formData.get('unit') || '');
      const dims = String(formData.get('dims') || '');

      const file = formData.get('file');
      attachments =
        file instanceof File && file.size > 0
          ? [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()) }]
          : undefined;

      fields = [
        { label: 'Name', value: name },
        { label: 'Email', value: email },
        { label: 'Packaging Type', value: packType },
        { label: 'Board Structure', value: ply },
        { label: 'Expected Volume', value: `${volume} ${unit}`.trim() },
        { label: 'Dimensions (L x W x H mm)', value: dims },
      ];
      subject = `New RFQ from ${name || 'website visitor'}`;
    } else {
      const body = await request.json();
      name = String(body.name || '');
      email = String(body.email || '');
      const company = String(body.company || '');
      const phone = String(body.phone || '');
      const message = String(body.message || '');
      const volume = String(body.volume || '');
      const ply = String(body.ply || '');

      fields = [
        { label: 'Name', value: name },
        { label: 'Company', value: company },
        { label: 'Email', value: email },
        ...(phone ? [{ label: 'Phone', value: phone }] : []),
        ...(volume ? [{ label: 'Expected Volume', value: volume }] : []),
        ...(ply ? [{ label: 'Configuration', value: ply }] : []),
        { label: 'Message', value: message },
      ];
      subject = `New inquiry from ${name || 'website visitor'}`;
    }

    if (!name || !email || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Please provide a valid name and email address.' },
        { status: 400 }
      );
    }

    await sendInquiryEmail({ subject, fields, replyTo: email, attachments });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send inquiry email:', error);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong sending your message. Please try again later.' },
      { status: 500 }
    );
  }
}
