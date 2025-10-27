// api/oauth/start.js
// Redirects the user to monday.com's OAuth screen using app-defined scopes.

export default async function handler(req, res) {
  const clientId = process.env.MONDAY_CLIENT_ID;
  const redirectUri = process.env.MONDAY_REDIRECT_URI;

  // Build URL WITHOUT 'scope' (uses app's configured scopes)
  const authUrl =
    `https://auth.monday.com/oauth2/authorize?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code`;

  res.writeHead(302, { Location: authUrl });
  res.end();
}
