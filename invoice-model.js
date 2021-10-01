const mongoose = require('mongoose');
const { stringify } = require('querystring');

const invoiceSchema = new mongoose.Schema(
{
	createdAt: {
		type: Date,
		default: Date.now()
	},
paymentDue: {
	type: Date
},
description: {
	type: String,
	required: false,
	trim: true
},
paymentTerms: {
	type: Number
},
clientName:{
	type: String,
	trim: true
},
clientEmail:{
	type: String,
	trim: true
},
status:{
	type: String,
	default: 'pending',
	enum: {
		values: ['pending', 'paid', 'draft'],
		message: 'must be pending, paid or draft' 
}
},
senderStreet: {
	type: String,
	trim: true
},
senderCity: {
	type: String,
	trim: true
},
senderPostcode: {
	type: String,
	trim: true
},
senderCountry: {
	type: String,
	trim: true
},
billToStreet: {
	type: String,
	trim: true
},
billToCity: {
	type: String,
	trim: true
},
billToPostcode: {
	type: String,
	trim: true
},
billToCountry: {
	type: String,
	trim: true
},
item:[
	{
		itemName: {
			type: String,
			trim: true
		},
		itemQuantity: {
			type: Number
		},
		itemPrice: {
			type: Number
		}
	}
],
totalPrice: {
	type: Number,
	trim: true
}
})

const Invoice = mongoose.model('Invoice', invoiceSchema)

module.exports = Invoice;