let worksLinks;
let worksLink;
let worksDescription;
let activeTab;

function findElements() {
	worksLinks = document.querySelector('.worksLinks');
	worksLink = [].slice.call(document.querySelectorAll('.worksLink'));
	worksDescription = [].slice.call(document.querySelectorAll('.worksDescription'));
	console.log(worksLinks, worksLink, worksDescription);
	activeTab = 0;
}

function switchTabsContent(index) {
	worksDescription[activeTab].classList.remove('tabsContent-is-active');
	index = activeTab;
	worksDescription[activeTab].classList.add('tabsContent-is-active');
}

function isInactiveTab(index) {
	return index !== activeTab;
}


function switchTabs(index){
	console.log(index, 'index, switchTabs')
	if(isInactiveTab(index)) switchTabsContent(index);
}

function onClick(event) {
	event.preventDefault();
	const { target } = event;
	console.log(target, 'target,onClick');
	const index = worksLink.indexOf(target);
	console.log(index, 'target,onClick');
	if (index >= 0) switchTabs(index, target);
	console.log('!!!', 'target,onClick');
}

function subscribe() {
	worksLinks.addEventListener('click', onClick);

}

function init() {
	findElements();
	subscribe();
 }
window.onload = init;