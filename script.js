const model = document.querySelector('model-viewer');
model.addEventListener('model-visibility', () => {
	model.style.visibility = 'visible';
});

const button = document.querySelector('.connectButton');
button.addEventListener('click', () => {
	window.location = 'https://mint.mintmachines.xyz/';
});
