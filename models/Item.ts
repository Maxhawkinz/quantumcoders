import mongoose, { Schema, models, model } from 'mongoose'

const ItemSchema = new Schema({
	title: { type: String, required: true },
	category: { type: String, required: true },
	price: { type: Number, required: true },
	condition: { type: String, required: true },
	location: { type: String, required: true },
	description: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
})

export default models.Item || model('Item', ItemSchema)
