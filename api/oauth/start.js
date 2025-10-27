// api/oauth/start.js
export default async function handler(req, res) {
  const clientId = process.env.MONDAY_CLIENT_ID;
  const redirectUri = process.env.MONDAY_REDIRECT_URI;

  // SPACE-separated scopes (not commas)
  const scopes = [
    "boards:read",
    "boards:write",
    "items:read",
    "items:write",
    "workspaces:read",
    "users:read",
  ].join(" ");  // <-- space here

  const authUrl =
    `https://auth.monday.com/oauth2/authorize?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scopes)}`;

  res.writeHead(302, { Location: authUrl });
  res.end();
}
