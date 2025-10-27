// api/handshake.js
export default function handler(req, res) {
  res.status(200).json({
    mcp_version: "1.0.0",
    endpoints: {
      sse: "https://monday-mcp-connector.vercel.app/api/sse"
    },
    capabilities: {
      oauth: false,
      tools: ["monday_api_proxy"]
    }
  });
}
