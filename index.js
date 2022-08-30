let barElem = document.querySelectorAll('.bar-sec *');
let bar = document.querySelector('.bar-sec');
let bar1 = document.getElementById('bar-1');
let bar2 = document.getElementById('bar-2');
let bar3 = document.getElementById('bar-3');
let menu = document.querySelector('.menu');
let searchBtn = document.querySelector('#search-btn');
let searchInput = document.querySelector('.search-sec input');
let cardContainer = document.querySelector('.card-container');
let postNo = document.querySelector('#postNo');
let prevBtnOfPost = document.querySelector('#prev');
let nxtBtnOfPost = document.querySelector('#nxt');
let links = document.querySelector('.links');
let lnkChild = document.querySelectorAll('.links > li')

let toggle = false;

function barInitial() {
	bar1.style.transform = 'rotateZ(0deg)';
	bar1.style.top = '3px';
	bar3.style.transform = 'rotateZ(0deg)';
	bar3.style.bottom = '3px';
	bar2.style.opacity = '100%';
	bar.classList.remove('bar-elem-absolute');
}

function toggleBar() {

	if (toggle == true) {
		toggle = false;

		barInitial();
		menu.style.left = '-120%';
	}
	else {
		toggle = true;
		bar1.style.transform = 'rotateZ(-47deg)';
		bar1.style.top = '2px';
		bar3.style.transform = 'rotateZ(47deg)';
		bar3.style.bottom = '0px';
		bar2.style.opacity = '0%';
		bar.classList.add('bar-elem-absolute');
		menu.style.left = '-20%';

	}
}
bar?.addEventListener('click', toggleBar);
let toggle2 = true;

function showInput() {
	if (toggle2 == true) {
		searchInput.style.right = '30px';
		menu.style.left = '-120%';
		searchInput.value = '';
		barInitial();
		toggle2 = false;
	} else {
		searchInput.style.right = '-250px';
		toggle2 = true;
	}
}
let cardConChild = Array.from(cardContainer.children);
postNo.innerText = cardConChild.length;
cardConChild.forEach((elem, index, array) => {});

let linksChild = Array.from(links.children);

linksChild.forEach(
	(elem) => {
		if (elem.children.length > 0) {
			elem.classList.add('arrow');
		} else {
			if (elem.className == 'arrow') {
				elem.classList.remove('arrow');
			}
		}
	}
);
let barElem = document.querySelectorAll('.bar-sec *');
let bar = document.querySelector('.bar-sec');
let bar1 = document.getElementById('bar-1');
let bar2 = document.getElementById('bar-2');
let bar3 = document.getElementById('bar-3');
let menu = document.querySelector('.menu');
let searchBtn = document.querySelector('#search-btn');
let searchInput = document.querySelector('.search-sec input');
let cardContainer = document.querySelector('.card-container');
let postNo = document.querySelector('#postNo');
let prevBtnOfPost = document.querySelector('#prev');
let nxtBtnOfPost = document.querySelector('#nxt');
let links = document.querySelector('.links');
let lnkChild = document.querySelectorAll('.links > li')

let toggle = false;

function barInitial() {
	bar1.style.transform = 'rotateZ(0deg)';
	bar1.style.top = '3px';
	bar3.style.transform = 'rotateZ(0deg)';
	bar3.style.bottom = '3px';
	bar2.style.opacity = '100%';
	bar.classList.remove('bar-elem-absolute');
}

function toggleBar() {

	if (toggle == true) {
		toggle = false;

		barInitial();
		menu.style.left = '-120%';
	}
	else {
		toggle = true;
		bar1.style.transform = 'rotateZ(-47deg)';
		bar1.style.top = '2px';
		bar3.style.transform = 'rotateZ(47deg)';
		bar3.style.bottom = '0px';
		bar2.style.opacity = '0%';
		bar.classList.add('bar-elem-absolute');
		menu.style.left = '-20%';

	}
}
bar?.addEventListener('click', toggleBar);
let toggle2 = true;

function showInput() {
	if (toggle2 == true) {
		searchInput.style.right = '30px';
		menu.style.left = '-120%';
		searchInput.value = '';
		barInitial();
		toggle2 = false;
	} else {
		searchInput.style.right = '-250px';
		toggle2 = true;
	}
}
let cardConChild = Array.from(cardContainer.children);
postNo.innerText = cardConChild.length;
cardConChild.forEach((elem, index, array) => {});

let linksChild = Array.from(links.children);

linksChild.forEach(
	(elem) => {
		if (elem.children.length > 0) {
			elem.classList.add('arrow');
		} else {
			if (elem.className == 'arrow') {
				elem.classList.remove('arrow');
			}
		}
	}
);