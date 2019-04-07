let popup;
let popupClose;

function findElements() {
	popup = document.querySelector('.popup');
	popupClose = popup.querySelector('.popupClose');
}

function showPopup() {
	popup.classList.add('popup-is-active');
}

function hidePopup() {
	popup.classList.remove('popup-is-active');
}

function writeCookie() {
	let now = new Date();
	let time = now.getTime();
	time += 1000 * 60 * 60* 24;
	now.setTime(time);
	document.cookie = "name=popup;path=/;expires=" + now.toUTCString() + ';';
}

function hasCookie() {
	return document.cookie;
}

function onCloseClick(event) {
		event.preventDefault();
		hidePopup();
		writeCookie();
}

function subscribe() {
	popupClose.addEventListener('click', onCloseClick);
	if (!hasCookie()) showPopup();
	else hidePopup();
}

function init() {
	findElements();
	subscribe();
}

window.onload = init;