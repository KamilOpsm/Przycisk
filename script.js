// const btn = document.querySelector('.btn');
const btns = document.querySelectorAll('.btn');

const btnAnimation = (e) => {
	const top = e.clientY;
	const left = e.clientX;

	//pozycja, w którą klikamy

	const btnTopPosition = e.target.offsetTop;
	const btnLeftPosition = e.target.offsetLeft;

	//pozycja przycisku

	const insideBtnTop = top - btnTopPosition;
	const insideBtnLeft = left - btnLeftPosition;

	const circle = document.createElement('span');
	circle.classList.add('circle');
	circle.style.top = insideBtnTop + 'px';
	circle.style.left = insideBtnLeft + 'px';

	e.target.appendChild(cirscle);

	setTimeout(() => {
		circle.remove();
	}, 300);
};

// btn.addEventListener('click', btnAnimation);

btns.forEach(btn => btn.addEventListener('click', btnAnimation));
