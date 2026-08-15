import { PrismaClient } from '@prisma/client';const prisma=new PrismaClient();
async function main(){console.log('Seed content is clearly labelled development placeholder content for Whimsical Lily Co.');}
main().finally(()=>prisma.$disconnect());
