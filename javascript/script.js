const tabItems = document.querySelectorAll('.tabmenu');
const tabContentItems = document.querySelectorAll('.tab-content');
tabItems.forEach( item=> {
	item.addEventListener('click',selectItem);
});
function selectItem (e) {
	removeBorder();
	removeShow();
	this.classList.add('tab-border');
	const tabid = this.id+'-content';
	document.getElementById(tabid).classList.add('show');
}
function removeBorder(){
	tabItems.forEach( item=> {
		item.classList.remove('tab-border');
	});
}
function removeShow() {
	tabContentItems.forEach( item=> {
		item.classList.remove('show');
	});
}