const { Client } = require('@modelcontextprotocol/sdk/client/index.js');
const { StdioClientTransport } = require('@modelcontextprotocol/sdk/client/stdio.js');

// Example MCP Client for testing
class PrismaMCPClient {
  constructor() {
    this.client = null;
  }

  async connect() {
    const transport = new StdioClientTransport({
      command: 'node',
      args: ['server.js'],
    });

    this.client = new Client(
      {
        name: 'prisma-mcp-client',
        version: '1.0.0',
      },
      {
        capabilities: {},
      }
    );

    await this.client.connect(transport);
    console.log('Connected to MCP server');
  }

  async listTools() {
    if (!this.client) {
      throw new Error('Client not connected');
    }

    const response = await this.client.request(
      { method: 'tools/list' },
      { tools: [] }
    );
    
    return response.tools;
  }

  async queryDatabase(model, operation, data = {}) {
    if (!this.client) {
      throw new Error('Client not connected');
    }

    const response = await this.client.request(
      {
        method: 'tools/call',
        params: {
          name: 'query_database',
          arguments: { model, operation, data },
        },
      },
      { content: [] }
    );

    return response;
  }

  async close() {
    if (this.client) {
      await this.client.close();
    }
  }
}

module.exports = { PrismaMCPClient };
