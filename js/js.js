const btnAbout = document.getElementById('btn-about');
const btnSkills = document.getElementById('btn-skills');
const btnPortfolio = document.getElementById('btn-portfolio');
const btnContacts = document.getElementById('btn-contacts');

const middleAbout = document.getElementById('middle-about');
const middleSkills = document.getElementById('middle-skills');
const middlePortfolio = document.getElementById('middle-portfolio');
const middleContacts = document.getElementById('middle-contacts');

// Объявляем переменные контактов

let telegramm = 'https://t.me/panfilstreet';
let vk = 'https://vk.com/panfill88';
let github = 'https://github.com/IvanPanfilov88';

// Находим кнопки контактов по ID

btnTelegramm = document.getElementById('telegramm');
btnVk = document.getElementById('vk');
btnGithub = document.getElementById('github');






// Функция click контактов

btnTelegramm.onclick = function(){
	window.open(telegramm);
}

btnVk.onclick = function() {
	window.open(vk);
}

btnGithub.onclick = function() {
	window.open(github);
}






// Функция scroll страницы

btnAbout.addEventListener('click', e => {
	e.preventDefault()
	middleAbout.scrollIntoView({
		block: 'nearest',
		behavior: 'smooth',
	});
});


btnSkills.addEventListener('click', e => {
	e.preventDefault()
	middleSkills.scrollIntoView({
		block: 'nearest',
		behavior: 'smooth',
	});
});

btnPortfolio.addEventListener('click', e => {
	e.preventDefault()
	middlePortfolio.scrollIntoView({
		block: 'nearest',
		behavior: 'smooth',
	});
});

btnContacts.addEventListener('click', e => {
	e.preventDefault()
	middleContacts.scrollIntoView({
		block: 'nearest',
		behavior: 'smooth',
	});
});





