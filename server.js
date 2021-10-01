const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(
	DB,
	async(err)=>{
			if(err) throw err;
			console.log("DB Connection successful")
	}
)



const port = 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
