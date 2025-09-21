import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import Item from '@/models/Item'

export async function GET() {
	await connectToDatabase()
	const items = await Item.find().sort({ createdAt: -1 })
	return NextResponse.json(items)
}

export async function POST(req: Request) {
	try {
		await connectToDatabase()
		const body = await req.json()
		const item = await Item.create({
			title: body.title,
			category: body.category,
			price: Number(body.price),
			condition: body.condition,
			location: body.location,
			description: body.description,
		})
		return NextResponse.json(item, { status: 201 })
	} catch (e: any) {
		return NextResponse.json({ error: e.message || 'Failed to create item' }, { status: 400 })
	}
}
