const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// mongoose.connect(
// 	DB,
// 	async(err)=>{
// 			if(err) throw err;
// 			console.log("DB Connection successful")
// 	}
// )

mongoose.connect(DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
}).then(con => console.log('DB CONNECTION SUCCESSFUL'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});