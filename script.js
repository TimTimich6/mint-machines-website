const model = document.querySelector('model-viewer');
model.addEventListener('model-visibility', () => {
	model.style.visibility = 'visible';
});
