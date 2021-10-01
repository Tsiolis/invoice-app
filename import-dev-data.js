const fs = require('fs')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(
	DB,
	async(err)=>{
			if(err) throw err;
			console.log("DB Connection successful")
	}
)

const invoices = JSON.parse(fs.readFileSync('data.json','utf-8'));

// const importData = async () =>{
// 	try {
// 		await invoiceContainer.create(invoices);
// 		console.log('Data successfully loaded');
// 	} catch(err){
// 		console.log(err);
// 	}
// }