// Export Prisma Client for use in other packages
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  prisma,
  PrismaClient
};
