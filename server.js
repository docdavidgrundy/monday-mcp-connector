// server.js
// Minimal MCP-compatible server for Vercel
// This simply confirms the server is running and ready for future OAuth handling.

import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Simple root route
app.get("/", (req, res) => {
  res.send("✅ Grundy Ops MCP server is running!");
});

// This /sse route is the one ChatGPT will connect to.
// For now, it just returns a basic success message.
app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();
  res.write(`data: MCP server is alive and waiting for configuration.\n\n`);
});

// Start the server
app.listen(port, () => {
  console.log(`✅ MCP server listening on port ${port}`);
});

export default app;
