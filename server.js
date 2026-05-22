require('dotenv').config();
/**
 * SIENNA MUSE — Local OTP Demo Server
 * Sends OTP emails via Nodemailer (Ethereal test account by default).
 * For real email: set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS env vars.
 *
 * Run: node server.js
 * Then open index.html in a browser (or use a static server on a separate port).
 */

const express = require('express');
const cors    = require('cors');
const nodemailer = require('nodemailer');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors()); // Allow requests from the frontend (file:// or localhost:5500)
app.use(express.json());

// ── Transporter factory ───────────────────────────────────────────────────────
async function createTransporter() {
  // If real SMTP credentials are provided, use them
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    console.log('📧  Using real SMTP:', process.env.SMTP_HOST);
    return nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   parseInt(process.env.SMTP_PORT  || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // Otherwise create a free Ethereal test account automatically
  const testAccount = await nodemailer.createTestAccount();
  console.log('📧  Using Ethereal test account:', testAccount.user);
  return nodemailer.createTransport({
    host:   'smtp.ethereal.email',
    port:   587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
}

// ── Routes ────────────────────────────────────────────────────────────────────

/**
 * POST /request-otp
 * Body: { email, projectId, otp, link }
 * Sends the OTP code + magic link to the given email address.
 */
app.post('/request-otp', async (req, res) => {
  const { email, projectId, otp, link } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'email and otp are required' });
  }

  try {
    const transporter = await createTransporter();
    const fromAddress  = process.env.EMAIL_FROM || 'Sienna Muse <no-reply@siennamuse.local>';

    const info = await transporter.sendMail({
      from:    fromAddress,
      to:      email,
      subject: 'Your Private Gallery Access Code — Sienna Muse',
      text: [
        'Hello,',
        '',
        `Your one-time access code for the Sienna Muse private gallery is:`,
        '',
        `  ${otp}`,
        '',
        'Or click the link below to open the gallery directly:',
        link || '',
        '',
        'This code expires in 1 minute.',
        '',
        '— Sienna Muse Studio',
      ].join('\n'),
      html: `
        <div style="font-family:'Georgia',serif;max-width:520px;margin:0 auto;padding:40px 32px;background:#FDFBF7;border:1px solid #e8e2db;border-radius:16px;">
          <h2 style="font-size:22px;color:#3E3B39;margin-bottom:6px;">Private Gallery Access</h2>
          <p style="color:#5C5854;font-size:14px;margin-bottom:28px;">
            Enter the code below on the Sienna Muse website to unlock the private gallery.
          </p>
          <div style="text-align:center;background:#F5F2ED;border-radius:12px;padding:28px 0;margin-bottom:28px;">
            <span style="font-size:40px;font-weight:700;letter-spacing:10px;color:#A0522D;">${otp}</span>
          </div>
          ${link ? `
          <p style="color:#5C5854;font-size:13px;text-align:center;margin-bottom:8px;">Or open the gallery directly:</p>
          <p style="text-align:center;">
            <a href="${link}" style="display:inline-block;padding:12px 28px;background:#A0522D;color:#fff;border-radius:50px;font-size:13px;text-decoration:none;letter-spacing:1px;">Open Private Gallery</a>
          </p>` : ''}
          <p style="color:#b0a89e;font-size:11px;text-align:center;margin-top:28px;">This code expires in <strong>1 minute</strong>. Do not share it.</p>
        </div>
      `,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info);

    // DEBUG_SHOW_OTP=true returns the OTP in the response (dev only)
    const debugOtp = process.env.DEBUG_SHOW_OTP === 'true' ? otp : undefined;

    console.log(`✅  OTP sent to ${email} for project "${projectId}"`);
    if (previewUrl) console.log(`🔗  Ethereal preview: ${previewUrl}`);

    return res.json({
      success: true,
      previewUrl: previewUrl || null,
      ...(debugOtp ? { otp: debugOtp } : {}),
    });
  } catch (err) {
    console.error('❌  Failed to send OTP email:', err.message);
    return res.status(500).json({ error: 'Failed to send email', detail: err.message });
  }
});

// Health-check
app.get('/health', (_req, res) => res.json({ status: 'ok', port: PORT }));

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🌿  Sienna Muse OTP server running at http://localhost:${PORT}`);
  console.log(`    POST http://localhost:${PORT}/request-otp  — send OTP email`);
  console.log(`    GET  http://localhost:${PORT}/health       — health check\n`);
});