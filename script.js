let worksLinks;
let worksLink;
let worksDescription;
let activeTab;

function findElements() {
	worksLinks = document.querySelector('.worksLinks');
	worksLink = [].slice.call(document.querySelectorAll('.worksLink'));
	worksDescription = [].slice.call(document.querySelectorAll('.worksDescription'));
	activeTab = 0;
}

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

function subscribe() {
	worksLinks.addEventListener('click', onClick);
}

function init() {
	findElements();
	subscribe();
 }

window.onload = init;