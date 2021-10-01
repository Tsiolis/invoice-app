const invoiceCount = document.getElementsByClassName('invoice');
const totalInvoices = document.getElementById('total-invoices');
const invoiceContainer = document.getElementById('invoice-container');
const paymentStatus = document.getElementById('payment-status');

function getByPaymentStatus(){
	const selectedStatus = paymentStatus.value;
	const paid = document.getElementsByClassName('paid');
	const pending = document.getElementsByClassName('pending');

	console.log(selectedStatus);

	
}

// const paid = document.getElementsByClassName('paid');
// console.log(paid);


// paymentStatus.addEventListener('change', () =>{
// 	const selectedStatus = paymentStatus.value;
// 	const paid = document.getElementsByClassName('paid');
// 	const pending = document.getElementsByClassName('pending');
// 	invoiceContainer.innerHTML = '';
// 	if(selectedStatus === 'paid'){
// 		for (let i = pending.length - 1; i >= 0; --i) {
// 			pending[i].remove();
// 		}} else if(selectedStatus === 'pending'){
// 			for (let i = paid.length - 1; i >= 0; --i) {
// 				paid[i].remove();
// 			}
// 		}
// 	}
// );

totalInvoices.innerHTML = invoiceCount.length;

