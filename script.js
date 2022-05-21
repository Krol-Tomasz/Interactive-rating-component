const numbersBtn = document.querySelectorAll('.number')
const submitBtn = document.querySelector('.btn-submit')
const selectedRatingText = document.querySelector('.selected-rating')
const mainCard = document.querySelector('.main-card')
const thanksCard = document.querySelector('.thanks-card')

const activeState = e => {
	numbersBtn.forEach(numberBtn => {
		if (numberBtn.classList.contains('active')) {
			numberBtn.classList.remove('active')
		}
	})
	e.target.classList.add('active')
}

const sendRating = () => {
	mainCard.classList.add('hide-state')
	thanksCard.classList.remove('hide-state')
}

const selectedRating = () => {
	const currentSelected = document.querySelector('.active')
	selectedRatingText.textContent = currentSelected.textContent
}

numbersBtn.forEach(numberBtn => {
	numberBtn.addEventListener('click', activeState)
})
submitBtn.addEventListener('click', sendRating)
submitBtn.addEventListener('click', selectedRating)
