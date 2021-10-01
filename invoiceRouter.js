const express = require('express');
const fs = require('fs');
const invoiceController = require('./invoiceController');

const router = express.Router();

router
.route('/')
.get(invoiceController.getAllInvoices);


router
.route('/test')
.get(invoiceController.getAllInvoices);


router
.route('/new')
.post(invoiceController.createInvoice);

router
.route('/draft')
.post(invoiceController.createDraftInvoice);

router
.route('/:id')
.get(invoiceController.getInvoice);

router
.route('/update/:id')
.patch(invoiceController.updateInvoice);

router
.route('/payment-status/:id')
.post(invoiceController.markAsPaid);

router
.route('/delete/:id')
.post(invoiceController.deleteInvoice);

module.exports = router;