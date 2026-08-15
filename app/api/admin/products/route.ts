import { NextResponse } from 'next/server';import { z } from 'zod';
const productSchema=z.object({name:z.string().min(2),price:z.number().nonnegative(),categoryId:z.string(),hidden:z.boolean().default(false),customizable:z.boolean().default(false)});
export async function POST(req:Request){const body=productSchema.safeParse(await req.json());if(!body.success)return NextResponse.json({error:'Invalid product',issues:body.error.flatten()},{status:400});return NextResponse.json({product:{id:'dev-product-id',...body.data},message:'Product saved. Replace seed content whenever Lily is ready.'});}
