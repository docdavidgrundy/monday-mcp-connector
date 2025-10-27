// api/mcp.js
// Minimal MCP manifest describing a single test action.

export default function handler(_req, res) {
  res.status(200).json({
    mcp_version: "1.0.0",
    // Where OAuth starts if you later enable it in the connector UI
    oauth: {
      type: "external",
      start_url: "https://monday-mcp-connector.vercel.app/api/oauth/start",
      callback_url: "https://monday-mcp-connector.vercel.app/api/oauth/callback"
    },
    // The actions ChatGPT can call
    actions: [
      {
        name: "monday.ping",
        title: "Ping Monday MCP",
        description: "Health check that returns 'pong'.",
        method: "POST",
        endpoint: "https://monday-mcp-connector.vercel.app/api/actions/ping",
        // JSON Schema for params (none needed here)
        parameters: {
          type: "object",
          properties: {},
          required: []
        }
      }
    ]
  });
}
