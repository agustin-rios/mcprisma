#!/usr/bin/env node

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} = require('@modelcontextprotocol/sdk/types.js');

// MCP Server for Prisma integration
class PrismaMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'prisma-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupHandlers();
  }

  setupHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'query_database',
            description: 'Execute a query on the database using Prisma',
            inputSchema: {
              type: 'object',
              properties: {
                model: {
                  type: 'string',
                  description: 'The Prisma model to query (e.g., User, Post)',
                },
                operation: {
                  type: 'string',
                  description: 'The operation to perform (findMany, findUnique, create, update, delete)',
                },
                data: {
                  type: 'object',
                  description: 'The data for the operation',
                },
              },
              required: ['model', 'operation'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      if (name === 'query_database') {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                message: 'Database query tool - integration with Prisma pending',
                model: args.model,
                operation: args.operation,
                data: args.data,
              }, null, 2),
            },
          ],
        };
      }

      throw new Error(`Unknown tool: ${name}`);
    });
  }

  async start() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Prisma MCP Server running on stdio');
  }
}

// Start the server
const server = new PrismaMCPServer();
server.start().catch(console.error);
