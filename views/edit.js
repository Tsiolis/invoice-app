const editInvoice = document.getElementById('edit-invoice')
editInvoice.addEventListener('click', (e) =>{
	const invoiceEditForm = document.getElementById('invoice-edit-form')
	invoiceEditForm.style.display = 'block';
})

const closeEditForm = document.getElementById('cancel-edit').addEventListener('click', (e) =>{
	const invoiceForm = document.getElementById('invoice-edit-form');
	invoiceForm.style.display = 'none';
})

