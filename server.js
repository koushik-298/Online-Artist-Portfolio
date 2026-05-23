require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/request-otp', async (req, res) => {
  const { email, projectId, otp, link } = req.body;
  if (!email || !otp) {
    return res.status(400).json({ error: 'email and otp are required' });
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email }] }],
        from: { email: 'borrakoushik10@gmail.com', name: 'Sienna Muse' },
        subject: 'Your Private Gallery Access Code — Sienna Muse',
        content: [{
          type: 'text/html',
          value: `
            <div style="font-family:'Georgia',serif;max-width:520px;margin:0 auto;padding:40px 32px;background:#FDFBF7;border:1px solid #e8e2db;border-radius:16px;">
              <h2 style="font-size:22px;color:#3E3B39;margin-bottom:6px;">Private Gallery Access</h2>
              <p style="color:#5C5854;font-size:14px;margin-bottom:28px;">Enter the code below to unlock the private gallery.</p>
              <div style="text-align:center;background:#F5F2ED;border-radius:12px;padding:28px 0;margin-bottom:28px;">
                <span style="font-size:40px;font-weight:700;letter-spacing:10px;color:#A0522D;">${otp}</span>
              </div>
              ${link ? `<p style="text-align:center;"><a href="${link}" style="display:inline-block;padding:12px 28px;background:#A0522D;color:#fff;border-radius:50px;font-size:13px;text-decoration:none;">Open Private Gallery</a></p>` : ''}
              <p style="color:#b0a89e;font-size:11px;text-align:center;margin-top:28px;">This code expires in <strong>1 minute</strong>.</p>
            </div>
          `
        }]
      })
    });

    if (response.ok) {
      console.log(`✅ OTP sent to ${email}`);
      return res.json({ success: true });
    } else {
      const err = await response.json();
      console.error('❌ SendGrid error:', err);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } catch (err) {
    console.error('❌ Error:', err.message);
    return res.status(500).json({ error: err.message });
  }
});

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`\n🌿 Sienna Muse server running at http://localhost:${PORT}\n`);
});