
window.onload = function(){checkInputs()};

function hidden_menuUp(){
	
	let elem = document.getElementById("hidden-menu");
	elem.className = "hidden-menu--active";
	
}

function hidden_menuDn(){
	
	let elem = document.getElementById("hidden-menu");
	elem.className = "hidden-menu";
	
}

function onchangeRange(){
	
	document.querySelector('#percent-text').textContent = document.querySelector('.input-container__form__item--range').value + '%';
	
}

function selectWindow(){
	
	const mainItemElem = document.querySelector('#main_item');
	const mainItemElemText = mainItemElem.querySelector('p');
	const mainItemElemImage = mainItemElem.querySelector('img');
	const selectElem = document.querySelector('.select');
	
	let classValue = mainItemElem.className;
	
	if(classValue === 'main__item') {
		mainItemElem.className = 'main__item--active';
		mainItemElemText.className = 'main__item__text--active';
		mainItemElemImage.src = 'icons/chevronup.png';
		selectElem.style.visibility = 'visible';
	} else {
		mainItemElem.className = 'main__item';
		mainItemElemText.className = 'main__item__text';
		mainItemElemImage.src = 'icons/chevrondown.png';
		selectElem.style.visibility = 'hidden';
	}
	//checkInputs();
}

function selectOption(event){
	
	const mainItemElemText = document.querySelector('#main_item').querySelector('p');
	
	mainItemElemText.textContent = event.currentTarget.textContent;
	
	selectWindow();
	
}

function checkInputs(){
	
	const mainItemElemText = document.querySelector('#main_item').querySelector('p');
	const submitButton = document.querySelector('.input-container__form__item--submit');
	const emailInput = document.querySelector('.input-container__form__item--email');
	const nameInput = document.querySelector('.input-container__form__item--name');

	
	if(mainItemElemText.textContent === 'Выберите тип системы' ||
	 emailInput.value === '' || emailInput.value.indexOf("@", 0) == -1 || nameInput.value === ''){

		//submitButton.disabled = true;
		return false;
	} else {

		//submitButton.disabled = false;
		return true;
	}

}

/*
function checkInputs(){
	const mainItemElemText = document.querySelector('#main_item').querySelector('p');
	const emailInput = document.querySelector('.input-container__form__item--email');
	const nameInput = document.querySelector('.input-container__form__item--name');

	const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	
	return (mainItemElemText.textContent != 'Выберите тип системы' && EMAIL_REGEXP.test(emailInput.value) && nameInput.value != '' );
}*/

function openModal(){

	const modalBody = document.querySelector('.modal-body');
	const windowFalse = document.querySelector('.modal-body__modal-window--false');
	const windowTrue = document.querySelector('.modal-body__modal-window--true');
	const submitButton = document.querySelector('.input-container__form__item--submit');

	if(!checkInputs()) {
		modalBody.style.visibility = 'visible';
		modalBody.style.display = 'flex';
		windowFalse.style.visibility = 'visible';
		windowFalse.style.display = 'block';
	} else {
		modalBody.style.visibility = 'visible';
		modalBody.style.display = 'flex';
		windowTrue.style.visibility = 'visible';
		windowTrue.style.display = 'block';
	}
}

function closeModal(){
	
	const modalBody = document.querySelector('.modal-body');
	const windowFalse = document.querySelector('.modal-body__modal-window--false');
	const windowTrue = document.querySelector('.modal-body__modal-window--true');
	
	modalBody.style.visibility = 'hidden';
	modalBody.style.display = 'none';
	windowFalse.style.visibility = 'hidden';
	windowFalse.style.display = 'none';
	modalBody.style.visibility = 'hidden';
	modalBody.style.display = 'none';
	windowTrue.style.visibility = 'hidden';
	windowTrue.style.display = 'none';

	if(checkInputs())
		document.querySelector('form').submit();
	
}







