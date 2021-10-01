const Invoice = require('./invoice-model');

exports.createInvoice = async (req, res, next) =>{
	try{
		const newInvoice = await Invoice.create(req.body);
		res.redirect('/');
	} catch(err){
		res.status(400).json({
			status: 'fail',
			message: err
		});
	}
	res.redirect('back')
}

exports.createDraftInvoice = async (req, res) =>{
	try{
		const newInvoice = await Invoice.create(req.body);
			res.status(201).json({
				status: 'success',
			data: {
					Invoice: newInvoice
			}
		});
	} catch(err){
		res.status(400).json({
			status: 'fail',
			message: err
		});
	}
}

exports.getAllInvoices = async(req, res) =>{
	try {
		const invoice = await Invoice.find()
		res.render('index', {invoice})
	}
	catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err
		});
}
}
exports.getInvoice = async (req, res) =>{
	try {
			const invoice = await Invoice.findById(req.params.id);
			res.render('invoiceShow', {invoice: invoice } ); 
			
	} catch (err) {
		res.status(404).json({
      status: 'fail',
      message: err
    })
	}
}

exports.updateInvoice = async (req, res) =>{
	const invoiceId = req.params.id;
	const invoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true
	})
	if(!invoice){
		return('No invoice with that ID')
	}
	res.redirect(`/${invoiceId}`)
}

exports.deleteInvoice = async (req, res) => {

  const invoice = await Invoice.findByIdAndDelete(req.params.id);

  if (!invoice) {
    return next('No document found with that ID', 404)
  }
  res.redirect('/')
}

exports.markAsPaid = async (req, res) =>{
	const invoice = await Invoice.findById(req.params.id)
	const paymentStatus = {$set: {status: "paid"}}

	invoice.updateOne(paymentStatus, (req, res) =>{
	
		if(!invoice){
			return('No invoice with that ID')
		}
})
res.redirect('back');
}
