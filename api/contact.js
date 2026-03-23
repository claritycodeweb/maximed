export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { RESEND_API_KEY, CONTACT_EMAIL } = process.env
  if (!RESEND_API_KEY || !CONTACT_EMAIL) {
    return res.status(500).json({ error: 'Server misconfigured' })
  }

  let body
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' })
  }

  // Honeypot check — reject silently
  if (body.company_website) {
    return res.status(200).json({ ok: true })
  }

  const { full_name, email, message, legal_consent, company } = body

  if (!full_name || !email || !message || !legal_consent) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const htmlBody = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(full_name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
    <hr />
    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Danibert Contact <noreply@danibert.ch>`,
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `Contact from ${full_name}`,
        html: htmlBody,
      }),
    })

    if (!response.ok) {
      const err = await response.text()
      console.error('Resend API error:', err)
      return res.status(502).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
