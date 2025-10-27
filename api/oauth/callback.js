// api/oauth/callback.js
// Exchanges ?code=... for an access token from monday.com and shows a simple success page.

export default async function handler(req, res) {
  try {
    const { code } = req.query;
    if (!code) {
      res.status(400).send("Missing ?code");
      return;
    }

    const body = new URLSearchParams({
      client_id: process.env.MONDAY_CLIENT_ID,
      client_secret: process.env.MONDAY_CLIENT_SECRET,
      code,
      redirect_uri: process.env.MONDAY_REDIRECT_URI,
      grant_type: "authorization_code",
    });

    const resp = await fetch("https://auth.monday.com/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const data = await resp.json();

    if (!resp.ok) {
      res.status(500).send(`Token exchange failed: ${JSON.stringify(data)}`);
      return;
    }

    // ⚠️ For a quick demo we just display the token.
    // In a real setup you’d store it securely (DB/KV) keyed to the user/session.
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`
      <h2>✅ Connected to monday.com</h2>
      <p>Access token received.</p>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `);
  } catch (e) {
    res.status(500).send(`OAuth callback error: ${e.message}`);
  }
}
