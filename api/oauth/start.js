// api/oauth/start.js
// Redirects the user to monday.com's OAuth screen.

export default async function handler(req, res) {
  const clientId = process.env.MONDAY_CLIENT_ID;
  const redirectUri = process.env.MONDAY_REDIRECT_URI; // MUST equal your Vercel URL below
  const scopes = [
    "boards:read",
    "boards:write",
    "items:read",
    "items:write",
    "workspaces:read",
    "users:read",
  ].join(",");

  const authUrl =
    `https://auth.monday.com/oauth2/authorize?client_id=${encodeURIComponent(clientId)}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scopes)}`;

  res.writeHead(302, { Location: authUrl });
  res.end();
}
