let worksLinks;
let worksLink;
let worksDescription;
let activeTab;

let popup;
let popupClose;

//general
function findElements() {
	worksLinks = document.querySelector('.worksLinks');
	worksLink = [].slice.call(document.querySelectorAll('.worksLink'));
	worksDescription = [].slice.call(document.querySelectorAll('.worksDescription'));
	activeTab = 0;
  
  popup = document.querySelector('.popup');
  popupClose = popup.querySelector('.popupClose');
}

//tabs

function switchTabsContent(index) {
	if ( index !== 0) worksDescription.forEach( item => item.classList.remove('tabsContent-is-active')); 
	worksDescription[activeTab].classList.remove('tabsContent-is-active');
	activeTab = index;
	worksDescription[activeTab].classList.add('tabsContent-is-active');

}

function deactivateTab(index) {
	return index !== activeTab;
}


function switchTabs(index){
	if(deactivateTab(index)) switchTabsContent(index);
	
}

function showAll(index) {
	 worksDescription.forEach( item => item.classList.add('tabsContent-is-active'));
}

function onClick(event) {
	event.preventDefault();
	const { target } = event;
	const index = worksLink.indexOf(target);
	if (index > 0) switchTabs(index, target);
	if (index === 0) showAll(index);

}

//popup
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


//general
function subscribe() {
	worksLinks.addEventListener('click', onClick);
  popupClose.addEventListener('click', onCloseClick);
  if (!hasCookie()) showPopup();
  else hidePopup();
}

function init() {
	findElements();
	subscribe();
 }

window.onload = init;