let images;
let popUp;

function findElements() {
	images = [].slice.call(document.getElementsByTagName('img'));
}

function getImage() {
	images.forEach(item => { src = item.getAttribute('src') });
	return src;
}

function createPopUp(target) {
	let img;
	let src = target.src;

	getImage();
	popUp = document.createElement('div');
	popUp.setAttribute('class', 'popup-is-active');
	img = document.createElement('img');
	img.setAttribute('src', src);
	popUp.append(img);
	document.body.appendChild(popUp);
}

function onClick(event) {
	const { target } = event;
	event.preventDefault();
	createPopUp(target);
	subscribeDocument();
}

function onDocumentClick() {
	popUp.style.display = 'none';
}

function subscribeDocument() {
	document.addEventListener('click', onDocumentClick, true);
}

function subscribe () {
	images.forEach(item => { item.addEventListener('click', onClick)} );
}

function init () {
	findElements();
	subscribe ();
}

window.onload = init;