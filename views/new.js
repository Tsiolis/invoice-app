const newInvoice = document.getElementById('new-invoice');
newInvoice.addEventListener('click', (e) =>{
	const invoiceForm = document.getElementById('invoice-form')
	invoiceForm.style.display = 'block';
})


const closeForm = document.getElementById('discard').addEventListener('click', (e) =>{
	const invoiceForm = document.getElementById('invoice-form');
	invoiceForm.style.display = 'none';
})


const showTotal = document.getElementById('itemPrice');
showTotal.addEventListener('blur', (e =>{
	const total = document.getElementById('total');
	const qty = document.getElementById('itemQty').value;
	const price = document.getElementById('itemPrice').value;

	total.innerHTML = `£${qty * price}`;
}));

