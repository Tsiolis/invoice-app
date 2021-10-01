const deleteButton = document.getElementById('delete');
const cancelButton = document.getElementById('cancel');


deleteButton.addEventListener('click', (e) =>{
	const modal = document.getElementById('delete-modal').style.display = 'block';
	const overlay = document.getElementById('overlay').style.display = 'block';
});

cancelButton.addEventListener('click', (e) =>{
	const modal = document.getElementById('delete-modal').style.display = 'none';
	const overlay = document.getElementById('overlay').style.display = 'none';
});

